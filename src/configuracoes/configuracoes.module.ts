import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuracao } from './entities/configuracao.entity';
import { ConfiguracoesService } from './services/configuracoes.service';
import { ConfiguracoesController } from './controllers/configuracoes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Configuracao])],
  controllers: [ConfiguracoesController],
  providers: [ConfiguracoesService],
  exports: [ConfiguracoesService],
})
export class ConfiguracoesModule {}
