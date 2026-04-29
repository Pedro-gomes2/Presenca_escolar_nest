import { Injectable, NotFoundException } from '@nestjs/common';
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
}
