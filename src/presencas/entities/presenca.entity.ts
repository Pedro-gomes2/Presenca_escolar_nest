import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Aluno } from '../../alunos/entities/aluno.entity';
import { Turma } from '../../turmas/entities/turma.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('presencas')
export class Presenca {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: 'date' })
  data: string;

  @ApiProperty()
  @Column({ type: 'time', nullable: true })
  horario: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: ['presente', 'atrasado', 'ausente'],
    default: 'presente',
  })
  status: string;

  @ApiProperty({ type: () => Aluno })
  @ManyToOne(() => Aluno, (aluno) => aluno.presencas, { onDelete: 'CASCADE' })
  aluno: Aluno;

  @ApiProperty({ type: () => Turma })
  @ManyToOne(() => Turma, (turma) => turma.presencas, { onDelete: 'CASCADE' })
  turma: Turma;
}
