import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Turma } from '../entities/turma.entity';
import { CreateTurmaDto } from '../dto/create-turma.dto';
import { UpdateTurmaDto } from '../dto/update-turma.dto';

@Injectable()
export class TurmasService {
  constructor(
    @InjectRepository(Turma)
    private readonly turmaRepository: Repository<Turma>,
  ) {}

  async create(createTurmaDto: CreateTurmaDto): Promise<Turma> {
    const turma = this.turmaRepository.create(createTurmaDto);
    return await this.turmaRepository.save(turma);
  }

  async findAll(): Promise<Turma[]> {
    return await this.turmaRepository.find({
      relations: ['alunos', 'professores'],
    });
  }

  async findOne(id: number): Promise<Turma> {
    const turma = await this.turmaRepository.findOne({
      where: { id },
      relations: ['alunos', 'professores', 'presencas'],
    });
    if (!turma) {
      throw new NotFoundException(`Turma com ID ${id} não encontrado`);
    }
    return turma;
  }
  async findOneByCode(codigo: string): Promise<Turma> {
    const turma = await this.turmaRepository.findOne({
      where: { codigo },
      relations: ['alunos', 'professores', 'presencas'],
    });
    if (!turma) {
      throw new NotFoundException(`Turma com código ${codigo} não encontrada`);
    }
    return turma;
  }

  async update(id: number, updateTurmaDto: UpdateTurmaDto): Promise<Turma> {
    const turma = await this.findOne(id);
    this.turmaRepository.merge(turma, updateTurmaDto);
    return await this.turmaRepository.save(turma);
  }

  async remove(id: number): Promise<void> {
    const turma = await this.findOne(id);
    await this.turmaRepository.remove(turma);
  }
}
