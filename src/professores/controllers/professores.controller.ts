import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { ProfessoresService } from '../services/professores.service';
import { CreateProfessorDto } from '../dto/create-professor.dto';
import { UpdateProfessorDto } from '../dto/update-professor.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('professores')
@Controller('/professores')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class ProfessoresController {
  constructor(private readonly professoresService: ProfessoresService) { }

  @Post()
  create(@Body() createProfessorDto: CreateProfessorDto) {
    return this.professoresService.create(createProfessorDto);
  }

  @Get()
  findAll() {
    return this.professoresService.findAll();
  }
  @Get('/nome/:nome')
  findOneByNome(@Param('nome') nome: string) {
    return this.professoresService.findOneByNome(nome);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.professoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfessorDto: UpdateProfessorDto) {
    return this.professoresService.update(+id, updateProfessorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professoresService.remove(+id);
  }



}

 