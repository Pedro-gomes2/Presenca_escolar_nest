import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aluno } from '../entities/aluno.entity';
import { CreateAlunoDto } from '../dto/create-aluno.dto';
import { UpdateAlunoDto } from '../dto/update-aluno.dto';

@Injectable()
export class AlunosService {
  constructor(
    @InjectRepository(Aluno)
    private readonly alunoRepository: Repository<Aluno>,
  ) { }

  async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
    const aluno = this.alunoRepository.create(createAlunoDto);
    return await this.alunoRepository.save(aluno);
  }

  async findAll(): Promise<Aluno[]> {
    return await this.alunoRepository.find({ relations: ['turma'] });
  }

  async findOne(id: number): Promise<Aluno> {
    const aluno = await this.alunoRepository.findOne({
      where: { id },
      relations: ['turma', 'presencas'],
    });
    if (!aluno) {
      throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
    }
    return aluno;
  }
  async findOneByMatricula(matricula: string): Promise<Aluno> {
    const aluno = await this.alunoRepository.findOne({
      where: { matricula },
      relations: ['turma', 'presencas'],
    });
    if (!aluno) {
      throw new NotFoundException(`Aluno com matrícula ${matricula} não encontrado`);
    }
    return aluno;
  }

  async update(id: number, updateAlunoDto: UpdateAlunoDto): Promise<Aluno> {
    const aluno = await this.findOne(id);
    this.alunoRepository.merge(aluno, updateAlunoDto);
    return await this.alunoRepository.save(aluno);
  }

  async remove(id: number): Promise<void> {
    const aluno = await this.findOne(id);
    await this.alunoRepository.remove(aluno);
  }
}
