import { Injectable, NotFoundException, ConflictException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cron } from '@nestjs/schedule';
import { Presenca } from '../entities/presenca.entity';
import { CreatePresencaDto } from '../dto/create-presenca.dto';
import { UpdatePresencaDto } from '../dto/update-presenca.dto';
import { AlunosService } from '../../alunos/services/alunos.service';
import { TurmasService } from '../../turmas/services/turmas.service';
import { WhatsappService } from '../../whatsapp/whatsapp.service';
import { ConfiguracoesService } from '../../configuracoes/services/configuracoes.service';

@Injectable()
export class PresencasService {
  private readonly logger = new Logger(PresencasService.name);

  constructor(
    @InjectRepository(Presenca)
    private readonly presencaRepository: Repository<Presenca>,
    private readonly alunosService: AlunosService,
    private readonly turmasService: TurmasService,
    private readonly whatsappService: WhatsappService,
    private readonly configService: ConfiguracoesService,
  ) { }

  async create(createPresencaDto: CreatePresencaDto): Promise<Presenca> {
    const { alunoId, turmaId, ...rest } = createPresencaDto;

    const aluno = await this.alunosService.findOne(alunoId);
    const turma = await this.turmasService.findOne(turmaId);

    // Proteção contra presença duplicada no mesmo dia
    const jaExiste = await this.presencaRepository.findOne({
      where: { aluno: { id: alunoId }, turma: { id: turmaId }, data: rest.data },
      relations: ['aluno', 'turma'],
    });
    if (jaExiste) {
      throw new ConflictException('Presença já registrada para este aluno nesta turma nesta data.');
    }

    const presenca = this.presencaRepository.create({ ...rest, aluno, turma });
    const salva = await this.presencaRepository.save(presenca);

    // Notificação WhatsApp ao responsável (não bloqueia a resposta)
    if (aluno.whatsappResponsavel) {
      this.whatsappService
        .notificarPresenca(aluno.nome, aluno.whatsappResponsavel, rest.status as any, rest.horario)
        .catch(err => this.logger.error('Erro notificação WhatsApp:', err));
    }

    return salva;
  }

  async findAll(): Promise<Presenca[]> {
    return await this.presencaRepository.find({ relations: ['aluno', 'turma'] });
  }

  async findOne(id: number): Promise<Presenca> {
    const presenca = await this.presencaRepository.findOne({
      where: { id },
      relations: ['aluno', 'turma'],
    });
    if (!presenca) throw new NotFoundException(`Presença com ID ${id} não encontrada`);
    return presenca;
  }

  async update(id: number, updatePresencaDto: UpdatePresencaDto): Promise<Presenca> {
    const presenca = await this.findOne(id);
    const { alunoId, turmaId, ...rest } = updatePresencaDto;
    if (alunoId) presenca.aluno = await this.alunosService.findOne(alunoId);
    if (turmaId) presenca.turma = await this.turmasService.findOne(turmaId);
    this.presencaRepository.merge(presenca, rest);
    return await this.presencaRepository.save(presenca);
  }

  async remove(id: number): Promise<void> {
    const presenca = await this.findOne(id);
    await this.presencaRepository.remove(presenca);
  }

  async findByFilter(data?: string, turmaId?: number, alunoId?: number): Promise<Presenca[]> {
    const qb = this.presencaRepository
      .createQueryBuilder('p')
      .leftJoinAndSelect('p.aluno', 'aluno')
      .leftJoinAndSelect('p.turma', 'turma');
    if (data)    qb.andWhere('p.data = :data', { data });
    if (turmaId) qb.andWhere('turma.id = :turmaId', { turmaId });
    if (alunoId) qb.andWhere('aluno.id = :alunoId', { alunoId });
    return qb.orderBy('p.data', 'DESC').addOrderBy('p.horario', 'DESC').getMany();
  }

  async resumoDiario(data: string, turmaId?: number) {
    const registros = await this.findByFilter(data, turmaId);
    return {
      presentes:  registros.filter(p => p.status === 'presente').length,
      atrasados:  registros.filter(p => p.status === 'atrasado').length,
      ausentes:   registros.filter(p => p.status === 'ausente').length,
      total:      registros.length,
    };
  }

  /**
   * Roda a cada minuto.
   * Se for o horário de corte configurado, notifica responsáveis de alunos ausentes.
   */
  @Cron('* * * * *')
  async verificarAusencias() {
    try {
      const config = await this.configService.findOrCreate();
      if (!config.notifFaltaAtiva || !config.whatsappAtivo) return;

      // Usa timezone de Brasília para comparar com o horário configurado pelo admin
      const agora = new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo',
      });
      if (agora !== config.horarioCorte) return;

      // Data de hoje também em horário de Brasília
      const hoje = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' })
        .split('/').reverse().join('-'); // DD/MM/YYYY → YYYY-MM-DD
      const alunos = await this.alunosService.findAll();
      const presencasHoje = await this.findByFilter(hoje);
      const idsPresentes = new Set(presencasHoje.map(p => p.aluno?.id));

      for (const aluno of alunos) {
        if (!idsPresentes.has(aluno.id) && aluno.whatsappResponsavel) {
          await this.whatsappService.notificarPresenca(
            aluno.nome, aluno.whatsappResponsavel, 'ausente', config.horarioCorte,
          );
        }
      }
    } catch (err) {
      this.logger.error('Erro ao verificar ausências:', err);
    }
  }
}
