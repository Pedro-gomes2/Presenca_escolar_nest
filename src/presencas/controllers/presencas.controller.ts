import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { PresencasService } from '../services/presencas.service';
import { CreatePresencaDto } from '../dto/create-presenca.dto';
import { UpdatePresencaDto } from '../dto/update-presenca.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('presenca')
@Controller('/presenca')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class PresencasController {
  constructor(private readonly presencasService: PresencasService) { }

  @Post()
  create(@Body() createPresencaDto: CreatePresencaDto) {
    return this.presencasService.create(createPresencaDto);
  }

  @Get()
  findAll() {
    return this.presencasService.findAll();
  }

  @Get('relatorio')
  relatorio(
    @Query('data') data?: string,
    @Query('turmaId') turmaId?: string,
    @Query('alunoId') alunoId?: string,
  ) {
    return this.presencasService.findByFilter(
      data,
      turmaId ? +turmaId : undefined,
      alunoId ? +alunoId : undefined,
    );
  }

  @Get('resumo-diario')
  resumoDiario(
    @Query('data') data: string,
    @Query('turmaId') turmaId?: string,
  ) {
    return this.presencasService.resumoDiario(data, turmaId ? +turmaId : undefined);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presencasService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePresencaDto: UpdatePresencaDto) {
    return this.presencasService.update(+id, updatePresencaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presencasService.remove(+id);
  }
}
