import { Injectable, Logger } from '@nestjs/common';
import { ConfiguracoesService } from '../configuracoes/services/configuracoes.service';

@Injectable()
export class WhatsappService {
  private readonly logger = new Logger(WhatsappService.name);

  constructor(private readonly configService: ConfiguracoesService) {}

  private formatarNumero(numero: string): string {
    // Remove tudo que não é dígito
    const digits = numero.replace(/\D/g, '');
    // Garante código do país (Brasil = 55)
    return digits.startsWith('55') ? digits : `55${digits}`;
  }

  private interpolar(template: string, vars: Record<string, string>): string {
    return template.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? '');
  }

  async enviarMensagem(numero: string, mensagem: string): Promise<void> {
    const config = await this.configService.findOrCreate();
    if (!config.whatsappAtivo || !config.whatsappApiUrl || !config.whatsappApiToken) return;

    const numeroFormatado = this.formatarNumero(numero);
    const url = `${config.whatsappApiUrl.replace(/\/$/, '')}/message/sendText/${config.whatsappInstancia ?? 'default'}`;

    try {
      const resp = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': config.whatsappApiToken,
        },
        body: JSON.stringify({ number: numeroFormatado, text: mensagem }),
      });
      if (!resp.ok) {
        this.logger.warn(`WhatsApp falhou [${resp.status}]: ${await resp.text()}`);
      }
    } catch (err) {
      this.logger.error('Erro ao enviar WhatsApp:', err);
    }
  }

  async notificarPresenca(
    nomeAluno: string,
    whatsappResponsavel: string,
    status: 'presente' | 'atrasado' | 'ausente',
    horario: string,
  ): Promise<void> {
    const config = await this.configService.findOrCreate();
    if (!config.whatsappAtivo || !whatsappResponsavel) return;

    const escola = config.nomeEscola ?? 'Escola';
    const vars = { nome: nomeAluno, escola, horario, horario_corte: config.horarioCorte };

    let template = '';
    if (status === 'presente')  template = config.msgPresente  ?? `✅ ${nomeAluno} chegou à ${escola} às ${horario}.`;
    if (status === 'atrasado')  template = config.msgAtrasado  ?? `⚠️ ${nomeAluno} chegou com atraso à ${escola} às ${horario}.`;
    if (status === 'ausente')   template = config.msgFalta     ?? `❌ ${nomeAluno} não registrou presença até ${config.horarioCorte} na ${escola}.`;

    const mensagem = this.interpolar(template, vars);
    await this.enviarMensagem(whatsappResponsavel, mensagem);
  }
}
