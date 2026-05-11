import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aluno } from '../entities/aluno.entity';
import { CreateAlunoDto } from '../dto/create-aluno.dto';
import { UpdateAlunoDto } from '../dto/update-aluno.dto';
import * as QRCode from 'qrcode';

@Injectable()
export class AlunosService {
  constructor(
    @InjectRepository(Aluno)
    private readonly alunoRepository: Repository<Aluno>,
  ) { }

  async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
    const { turmaId, ...rest } = createAlunoDto;
    const aluno = this.alunoRepository.create(rest);
    if (turmaId) {
      aluno.turma = { id: turmaId } as any;
    }
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
    const { turmaId, ...rest } = updateAlunoDto;

    // Atualiza campos escalares
    Object.assign(aluno, rest);

    // Atualiza relação de turma explicitamente
    if (turmaId !== undefined) {
      aluno.turma = turmaId ? ({ id: turmaId } as any) : null;
    }

    return await this.alunoRepository.save(aluno);
  }

  async remove(id: number): Promise<void> {
    const aluno = await this.findOne(id);
    await this.alunoRepository.remove(aluno);
  }

  async gerarQrCodeBase64(id: number): Promise<{ qrcode: string }> {
    const aluno = await this.findOne(id);
    const payload = `presencheck://aluno?matricula=${aluno.matricula}&id=${aluno.id}`;
    const dataUrl = await QRCode.toDataURL(payload, {
      width: 300,
      errorCorrectionLevel: 'H',
      margin: 2,
    });
    return { qrcode: dataUrl };
  }
}
