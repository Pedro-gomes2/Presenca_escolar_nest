import { Module } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { ConfiguracoesModule } from '../configuracoes/configuracoes.module';

@Module({
  imports: [ConfiguracoesModule],
  providers: [WhatsappService],
  exports: [WhatsappService],
})
export class WhatsappModule {}
