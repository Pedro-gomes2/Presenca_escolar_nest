import { IsString } from 'class-validator';

export class CreateTurmaDto {
  @IsString()
  nome: string;

  @IsString()
  codigo: string;

  @IsString()
  horario: string;
}
