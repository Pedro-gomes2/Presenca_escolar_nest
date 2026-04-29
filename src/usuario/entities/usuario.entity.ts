import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity('tb_usuarios')
export class Usuario {

  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  nome: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @Column({ unique: true })
  usuario: string; // Este será o e-mail para login

  @ApiProperty()
  @Column()
  senha: string;

  @ApiProperty()
  @Column({ nullable: true })
  foto: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: ['admin', 'professor', 'aluno'],
    default: 'aluno'
  })
  tipo: string;

  @ApiProperty()
  @CreateDateColumn()
  data_cadastro: Date;
}