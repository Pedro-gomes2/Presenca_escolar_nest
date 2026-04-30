import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professor } from '../entities/professor.entity';
import { CreateProfessorDto } from '../dto/create-professor.dto';
import { UpdateProfessorDto } from '../dto/update-professor.dto';

@Injectable()
export class ProfessoresService {
  constructor(
    @InjectRepository(Professor)
    private readonly professorRepository: Repository<Professor>,
  ) { }

  async create(createProfessorDto: CreateProfessorDto): Promise<Professor> {
    const professor = this.professorRepository.create(createProfessorDto);
    return await this.professorRepository.save(professor);
  }

  async findAll(): Promise<Professor[]> {
    return await this.professorRepository.find({ relations: ['turmas'] });
  }

  async findOne(id: number): Promise<Professor> {
    const professor = await this.professorRepository.findOne({
      where: { id },
      relations: ['turmas'],
    });
    if (!professor) {
      throw new NotFoundException(`Professor com ID ${id} não encontrado`);
    }
    return professor;
  }

  async findOneByNome(nome: string): Promise<Professor> {
    const professor = await this.professorRepository.findOne({
      where: { nome }
    });
    if (!professor) {
      throw new NotFoundException(`Professor com nome ${nome} não encontrado`);
    }
    return professor;
  }

  async update(id: number, updateProfessorDto: UpdateProfessorDto): Promise<Professor> {
    const professor = await this.findOne(id);
    this.professorRepository.merge(professor, updateProfessorDto);
    return await this.professorRepository.save(professor);
  }

  async remove(id: number): Promise<void> {
    const professor = await this.findOne(id);
    await this.professorRepository.remove(professor);
  }
}
