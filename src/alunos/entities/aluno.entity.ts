import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Turma } from '../../turmas/entities/turma.entity';
import { Presenca } from '../../presencas/entities/presenca.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('alunos')
export class Aluno {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  nome: string;

  @ApiProperty()
  @Column({ unique: true })
  matricula: string;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @ApiProperty({ type: () => Turma })
  @ManyToOne(() => Turma, (turma) => turma.alunos, { onDelete: 'SET NULL' })
  turma: Turma;

  @ApiProperty({ type: () => Presenca, isArray: true })
  @OneToMany(() => Presenca, (presenca) => presenca.aluno)
  presencas: Presenca[];

  @ApiProperty()
  @Column({ type: 'float', default: 0 })
  taxaPresenca: number;
}
