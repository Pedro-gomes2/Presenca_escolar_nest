import { Controller, Get, Post, Put, Patch, Delete, Body, Param, UseGuards, HttpCode, HttpStatus, Request } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../entities/usuario.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';


@ApiTags('Usuario')
@Controller('/usuarios')
@ApiBearerAuth()
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService) {}

    
    @UseGuards(JwtAuthGuard)
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
    @Patch('minha-senha')
    @HttpCode(HttpStatus.NO_CONTENT)
    alterarSenha(
        @Request() req: any,
        @Body() body: { senhaAtual: string; novaSenha: string },
    ) {
        return this.usuarioService.alterarSenha(req.user.sub, body.senhaAtual, body.novaSenha);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
        return this.usuarioService.remove(+id);
    }
}