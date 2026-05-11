import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { UsuarioService } from './usuario/services/usuario.service';

@Injectable()
export class AppService implements OnApplicationBootstrap {

  constructor(private readonly usuarioService: UsuarioService) {}

  getHello(): string {
    return 'Sistema de presença Online';
  }

  /**
   * Roda uma vez ao iniciar o servidor.
   * Garante que o administrador padrão existe no banco.
   */
  async onApplicationBootstrap() {
    const EMAIL = 'diretoria@admin.com';
    try {
      const existe = await this.usuarioService.findByUsuario(EMAIL);
      if (!existe) {
        await this.usuarioService.create({
          nome: 'Diretoria',
          usuario: EMAIL,
          senha: 'Diretoria@!321',
          tipo: 'admin',
          foto: '',
        } as any);
        console.log('✅  Admin criado: diretoria@admin.com');
      }
    } catch (err) {
      console.error('Erro ao criar admin padrão:', err);
    }
  }
}
