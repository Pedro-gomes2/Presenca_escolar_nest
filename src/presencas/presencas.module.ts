import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresencasService } from './services/presencas.service';
import { PresencasController } from './controllers/presencas.controller';
import { Presenca } from './entities/presenca.entity';
import { AlunosModule } from '../alunos/alunos.module';
import { TurmasModule } from '../turmas/turmas.module';
import { WhatsappModule } from '../whatsapp/whatsapp.module';
import { ConfiguracoesModule } from '../configuracoes/configuracoes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Presenca]),
    AlunosModule,
    TurmasModule,
    WhatsappModule,
    ConfiguracoesModule,
  ],
  controllers: [PresencasController],
  providers: [PresencasService],
})
export class PresencasModule { }
