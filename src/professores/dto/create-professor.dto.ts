import { IsString, IsEmail } from 'class-validator';

export class CreateProfessorDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  disciplina: string;
}
