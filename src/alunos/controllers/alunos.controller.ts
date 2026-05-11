import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { AlunosService } from '../services/alunos.service';
import { CreateAlunoDto } from '../dto/create-aluno.dto';
import { UpdateAlunoDto } from '../dto/update-aluno.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('alunos')
@Controller('/alunos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunosService.create(createAlunoDto);
  }

  

  @Get('/matricula/:matricula')
  findOneByMatricula(@Param('matricula') matricula: string) {
    return this.alunosService.findOneByMatricula(matricula);
  }

  @Get(':id/qrcode/base64')
  getQrCodeBase64(@Param('id') id: string) {
    return this.alunosService.gerarQrCodeBase64(+id);
  }

  @Get()
  findAll() {
    return this.alunosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alunosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAlunoDto: UpdateAlunoDto) {
    return this.alunosService.update(+id, updateAlunoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alunosService.remove(+id);
  }
}
