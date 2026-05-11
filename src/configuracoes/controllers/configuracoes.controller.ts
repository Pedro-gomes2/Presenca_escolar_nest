import { Controller, Get, Put, Body, UseGuards } from '@nestjs/common';
import { ConfiguracoesService } from '../services/configuracoes.service';
import { Configuracao } from '../entities/configuracao.entity';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('configuracoes')
@Controller('/configuracoes')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class ConfiguracoesController {
  constructor(private readonly service: ConfiguracoesService) {}

  @Get()
  get() {
    return this.service.findOrCreate();
  }

  @Put()
  update(@Body() dto: Partial<Configuracao>) {
    return this.service.update(dto);
  }
}
