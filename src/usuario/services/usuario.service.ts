import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { Bcrypt } from '../../auth/bcrypt/bcrypt';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
        private bcrypt: Bcrypt
    ) { }

    async findByUsuario(usuario: string): Promise<Usuario | null> {
        return await this.usuarioRepository.findOne({
            where: { usuario: usuario }
        });
    }

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }

    async findById(id: number): Promise<Usuario> {
        const usuario = await this.usuarioRepository.findOne({
            where: { id }
        });

        if (!usuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

        return usuario;
    }

    async create(usuario: Usuario): Promise<Usuario> {
        const buscaUsuario = await this.findByUsuario(usuario.usuario);

        if (buscaUsuario)
            throw new HttpException("O Usuário já existe!", HttpStatus.BAD_REQUEST);

        usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha);
        return await this.usuarioRepository.save(usuario);
    }

    async update(usuario: Usuario): Promise<Usuario> {
        const usuarioExistente = await this.findById(usuario.id);
        const buscaUsuario = await this.findByUsuario(usuario.usuario);
        
        if (buscaUsuario && buscaUsuario.id !== usuario.id)
            throw new HttpException('Este e-mail já está em uso!', HttpStatus.BAD_REQUEST);

        if (usuario.senha) {
            usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha);
        } else {
            usuario.senha = usuarioExistente.senha; 
        }

        return await this.usuarioRepository.save(usuario);
    }

    async remove(id: number): Promise<void> {
        const usuario = await this.findById(id);
        await this.usuarioRepository.remove(usuario);
    }

    async alterarSenha(emailUsuario: string, senhaAtual: string, novaSenha: string): Promise<void> {
        const usuario = await this.findByUsuario(emailUsuario);
        if (!usuario)
            throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);

        const senhaCorreta = await this.bcrypt.compararSenhas(senhaAtual, usuario.senha);
        if (!senhaCorreta)
            throw new HttpException('Senha atual incorreta', HttpStatus.UNAUTHORIZED);

        usuario.senha = await this.bcrypt.criptografarSenha(novaSenha);
        await this.usuarioRepository.save(usuario);
    }
}