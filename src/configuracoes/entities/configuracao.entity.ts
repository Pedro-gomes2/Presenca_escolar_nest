import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('configuracoes')
export class Configuracao {
  @PrimaryColumn({ default: 1 })
  id: number;

  // Horários
  @Column({ default: '07:30' })
  horarioEntrada: string;

  @Column({ type: 'int', default: 15 })
  toleranciaMinutos: number;

  @Column({ default: '08:30' })
  horarioCorte: string; // após este horário = ausente

  @Column({ default: '17:30' })
  horarioSaida: string;

  // Escola
  @Column({ nullable: true })
  nomeEscola: string;

  // WhatsApp
  @Column({ default: false })
  whatsappAtivo: boolean;

  @Column({ nullable: true })
  whatsappApiUrl: string;

  @Column({ nullable: true })
  whatsappApiToken: string;

  @Column({ nullable: true })
  whatsappInstancia: string; // nome da instância Evolution API

  @Column({ nullable: true, type: 'text' })
  msgPresente: string;

  @Column({ nullable: true, type: 'text' })
  msgAtrasado: string;

  @Column({ nullable: true, type: 'text' })
  msgFalta: string;

  @Column({ default: false })
  notifFaltaAtiva: boolean;
}
