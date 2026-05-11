import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlunosService } from './services/alunos.service';
import { Aluno } from './entities/aluno.entity';
import { Turma } from '../turmas/entities/turma.entity';
import { AlunosController } from './controllers/alunos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Aluno, Turma])],
  controllers: [AlunosController],
  providers: [AlunosService],
  exports: [AlunosService],
})
export class AlunosModule {}
