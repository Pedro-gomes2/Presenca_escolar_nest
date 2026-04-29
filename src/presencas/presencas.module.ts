import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresencasService } from './services/presencas.service';
import { PresencasController } from './controllers/presencas.controller';
import { Presenca } from './entities/presenca.entity';
import { AlunosModule } from '../alunos/alunos.module';
import { TurmasModule } from '../turmas/turmas.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Presenca]),
    AlunosModule,
    TurmasModule,
  ],
  controllers: [PresencasController],
  providers: [PresencasService],
})
export class PresencasModule { }
