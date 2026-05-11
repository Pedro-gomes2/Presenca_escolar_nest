import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Configuracao } from '../entities/configuracao.entity';

@Injectable()
export class ConfiguracoesService {
  constructor(
    @InjectRepository(Configuracao)
    private readonly repo: Repository<Configuracao>,
  ) {}

  async findOrCreate(): Promise<Configuracao> {
    let config = await this.repo.findOne({ where: { id: 1 } });
    if (!config) {
      config = this.repo.create({
        id: 1,
        horarioEntrada: '07:30',
        toleranciaMinutos: 15,
        horarioCorte: '08:30',
        horarioSaida: '17:30',
        nomeEscola: 'Escola',
        whatsappAtivo: false,
        msgPresente: '✅ {nome} chegou à {escola} às {horario}.',
        msgAtrasado: '⚠️ {nome} chegou com atraso à {escola} às {horario}.',
        msgFalta: '❌ {nome} não registrou presença até {horario_corte} na {escola}.',
        notifFaltaAtiva: false,
      });
      await this.repo.save(config);
    }
    return config;
  }

  async update(dto: Partial<Configuracao>): Promise<Configuracao> {
    const config = await this.findOrCreate();
    Object.assign(config, dto);
    return await this.repo.save(config);
  }
}
