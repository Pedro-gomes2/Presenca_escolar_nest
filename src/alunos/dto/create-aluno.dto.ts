import { IsString, IsEmail, IsOptional, IsNumber } from 'class-validator';

export class CreateAlunoDto {
  @IsString()
  nome: string;

  @IsString()
  matricula: string;

  @IsEmail()
  email: string;

  @IsNumber()
  @IsOptional()
  turmaId?: number;

  @IsNumber()
  @IsOptional()
  taxaPresenca?: number;

  @IsString()
  @IsOptional()
  nomeResponsavel?: string;

  @IsString()
  @IsOptional()
  whatsappResponsavel?: string;
}
