/**
 * SCANNER PÚBLICO — sem autenticação JWT.
 * Usado pela tela de entrada da escola (tablet/PC fixo).
 */
import { Controller, Post, Get, Body, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AlunosService } from '../alunos/services/alunos.service';
import { PresencasService } from '../presencas/services/presencas.service';

@ApiTags('scanner')
@Controller('/scanner')
export class ScannerController {
  constructor(
    private readonly alunosService: AlunosService,
    private readonly presencasService: PresencasService,
  ) {}

  /**
   * POST /scanner/entrada
   * Recebe o texto decodificado do QR e registra a presença.
   * Retorna dados do aluno + status do registro.
   */
  @Post('entrada')
  @HttpCode(HttpStatus.OK)
  async registrarEntrada(@Body() body: { qrText: string }) {
    const { qrText } = body;

    // Parseia URL: presencheck://aluno?matricula=X&id=Y
    let alunoId: number;
    try {
      const url = new URL(qrText);
      const idStr = url.searchParams.get('id');
      if (!idStr) throw new Error('ID ausente');
      alunoId = parseInt(idStr, 10);
    } catch {
      return { sucesso: false, motivo: 'qr_invalido', mensagem: 'QR Code inválido ou não pertence ao sistema.' };
    }

    const aluno = await this.alunosService.findOne(alunoId).catch(() => null);
    if (!aluno) {
      return { sucesso: false, motivo: 'aluno_nao_encontrado', mensagem: 'Aluno não encontrado no sistema.' };
    }

    const agora = new Date();
    const data    = agora.toISOString().split('T')[0];
    const horario = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' });

    try {
      await this.presencasService.create({
        alunoId: aluno.id,
        turmaId: aluno.turma?.id,
        data,
        horario,
        status: 'presente',
      } as any);

      return {
        sucesso: true,
        jaRegistrado: false,
        aluno: { id: aluno.id, nome: aluno.nome, matricula: aluno.matricula, turma: aluno.turma?.nome ?? '—' },
        horario,
      };
    } catch (err: any) {
      if (err?.status === 409 || err?.response?.statusCode === 409) {
        return {
          sucesso: true,
          jaRegistrado: true,
          aluno: { id: aluno.id, nome: aluno.nome, matricula: aluno.matricula, turma: aluno.turma?.nome ?? '—' },
          horario,
        };
      }
      throw err;
    }
  }

  /**
   * GET /scanner/resumo?data=YYYY-MM-DD
   * Retorna total de entradas do dia para o contador na tela do scanner.
   */
  @Get('resumo')
  async resumoDia(@Query('data') data: string) {
    if (!data) {
      data = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' })
        .split('/').reverse().join('-');
    }
    return this.presencasService.resumoDiario(data);
  }
}
