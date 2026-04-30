import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../entities/usuario.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';


@ApiTags('Usuario')
@Controller('/usuarios')
@ApiBearerAuth()
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService) {}

    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() usuario: Usuario) {
        return this.usuarioService.create(usuario);
    }

    
    @UseGuards(JwtAuthGuard)
    @Get('all')
    findAll() {
        return this.usuarioService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findById(@Param('id') id: string) {
        return this.usuarioService.findById(+id);
    }

    @UseGuards(JwtAuthGuard)
    @Put('atualizar')
    update(@Body() usuario: Usuario) {
        return this.usuarioService.update(usuario);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
        return this.usuarioService.remove(+id);
    }
}