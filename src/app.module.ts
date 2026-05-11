import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunosModule } from './alunos/alunos.module';
import { ProfessoresModule } from './professores/professores.module';
import { TurmasModule } from './turmas/turmas.module';
import { PresencasModule } from './presencas/presencas.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdService } from './data/services/prod.service';
import { AuthModule } from './auth/auth.module';
import { ConfiguracoesModule } from './configuracoes/configuracoes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule],
    }),
    AlunosModule,
    ProfessoresModule,
    TurmasModule,
    PresencasModule,
    UsuarioModule,
    AuthModule,
    ConfiguracoesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
