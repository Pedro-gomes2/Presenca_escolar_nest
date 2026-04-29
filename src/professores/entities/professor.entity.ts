import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Turma } from '../../turmas/entities/turma.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('professores')
export class Professor {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  nome: string;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  @Column()
  disciplina: string;

  @ApiProperty({ type: () => Turma, isArray: true })
  @ManyToMany(() => Turma, (turma) => turma.professores)
  turmas: Turma[];
}
