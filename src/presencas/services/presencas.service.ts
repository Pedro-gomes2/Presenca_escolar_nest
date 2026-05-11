import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Presenca } from '../entities/presenca.entity';
import { CreatePresencaDto } from '../dto/create-presenca.dto';
import { UpdatePresencaDto } from '../dto/update-presenca.dto';
import { AlunosService } from '../../alunos/services/alunos.service';
import { TurmasService } from '../../turmas/services/turmas.service';

@Injectable()
export class PresencasService {
  constructor(
    @InjectRepository(Presenca)
    private readonly presencaRepository: Repository<Presenca>,
    private readonly alunosService: AlunosService,
    private readonly turmasService: TurmasService,
  ) { }

  async create(createPresencaDto: CreatePresencaDto): Promise<Presenca> {
    const { alunoId, turmaId, ...rest } = createPresencaDto;

    const aluno = await this.alunosService.findOne(alunoId);
    const turma = await this.turmasService.findOne(turmaId);

    // Proteção contra presença duplicada no mesmo dia
    const jaExiste = await this.presencaRepository.findOne({
      where: {
        aluno: { id: alunoId },
        turma: { id: turmaId },
        data: rest.data,
      },
      relations: ['aluno', 'turma'],
    });
    if (jaExiste) {
      throw new ConflictException(
        `Presença já registrada para este aluno nesta turma nesta data.`,
      );
    }

    const presenca = this.presencaRepository.create({
      ...rest,
      aluno,
      turma,
    });

    return await this.presencaRepository.save(presenca);
  }

  async findAll(): Promise<Presenca[]> {
    return await this.presencaRepository.find({
      relations: ['aluno', 'turma'],
    });
  }

  async findOne(id: number): Promise<Presenca> {
    const presenca = await this.presencaRepository.findOne({
      where: { id },
      relations: ['aluno', 'turma'],
    });
    if (!presenca) {
      throw new NotFoundException(`Presença com ID ${id} não encontrada`);
    }
    return presenca;
  }

  async update(id: number, updatePresencaDto: UpdatePresencaDto): Promise<Presenca> {
    const presenca = await this.findOne(id);
    const { alunoId, turmaId, ...rest } = updatePresencaDto;

    if (alunoId) {
      presenca.aluno = await this.alunosService.findOne(alunoId);
    }
    if (turmaId) {
      presenca.turma = await this.turmasService.findOne(turmaId);
    }

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
    if (data) qb.andWhere('p.data = :data', { data });
    if (turmaId) qb.andWhere('turma.id = :turmaId', { turmaId });
    if (alunoId) qb.andWhere('aluno.id = :alunoId', { alunoId });
    return qb.orderBy('p.data', 'DESC').addOrderBy('p.horario', 'DESC').getMany();
  }

  async resumoDiario(data: string, turmaId?: number): Promise<{
    presentes: number;
    atrasados: number;
    ausentes: number;
    total: number;
  }> {
    const registros = await this.findByFilter(data, turmaId);
    const presentes = registros.filter((p) => p.status === 'presente').length;
    const atrasados = registros.filter((p) => p.status === 'atrasado').length;
    const ausentes = registros.filter((p) => p.status === 'ausente').length;
    return { presentes, atrasados, ausentes, total: registros.length };
  }
}
