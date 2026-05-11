import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { TurmasService } from '../services/turmas.service';
import { CreateTurmaDto } from '../dto/create-turma.dto';
import { UpdateTurmaDto } from '../dto/update-turma.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('turmas')
@Controller('/turmas')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class TurmasController {
  constructor(private readonly turmasService: TurmasService) { }

  @Post()
  create(@Body() createTurmaDto: CreateTurmaDto) {
    return this.turmasService.create(createTurmaDto);
  }

  @Get()
  findAll() {
    return this.turmasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turmasService.findOne(+id);
  }
  @Get('/codigo/:codigo')
  findOneByCode(@Param('codigo') codigo: string) {
    return this.turmasService.findOneByCode(codigo);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTurmaDto: UpdateTurmaDto) {
    return this.turmasService.update(+id, updateTurmaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turmasService.remove(+id);
  }

  @Post(':turmaId/professores/:professorId')
  adicionarProfessor(
    @Param('turmaId') turmaId: string,
    @Param('professorId') professorId: string,
  ) {
    return this.turmasService.adicionarProfessor(+turmaId, +professorId);
  }

  @Delete(':turmaId/professores/:professorId')
  removerProfessor(
    @Param('turmaId') turmaId: string,
    @Param('professorId') professorId: string,
  ) {
    return this.turmasService.removerProfessor(+turmaId, +professorId);
  }
}
