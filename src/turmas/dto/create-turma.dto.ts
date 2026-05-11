import { IsString, IsOptional, IsInt, Min } from 'class-validator';

export class CreateTurmaDto {
  @IsString()
  nome: string;

  @IsString()
  codigo: string;

  @IsString()
  @IsOptional()
  horario?: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  limiteAlunos?: number;
}
