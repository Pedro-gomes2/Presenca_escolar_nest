import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Aluno } from '../../alunos/entities/aluno.entity';
import { Professor } from '../../professores/entities/professor.entity';
import { Presenca } from '../../presencas/entities/presenca.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('turmas')
export class Turma {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  nome: string;

  @ApiProperty()
  @Column()
  codigo: string;

  @ApiProperty()
  @Column({ nullable: true, default: '' })
  horario: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true, type: 'int', default: null })
  limiteAlunos: number | null;

  @ApiProperty({ type: () => Aluno, isArray: true })
  @OneToMany(() => Aluno, (aluno) => aluno.turma)
  alunos: Aluno[];

  @ApiProperty({ type: () => Professor, isArray: true })
  @ManyToMany(() => Professor, (professor) => professor.turmas)
  @JoinTable({ name: 'professor_turmas' })
  professores: Professor[];

  @ApiProperty({ type: () => Presenca, isArray: true })
  @OneToMany(() => Presenca, (presenca) => presenca.turma)
  presencas: Presenca[];
}
