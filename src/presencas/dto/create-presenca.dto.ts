import { IsString, IsIn, IsNumber, IsDateString } from 'class-validator';

export class CreatePresencaDto {
  @IsDateString()
  data: string;

  @IsString()
  horario: string;

  @IsIn(['presente', 'atrasado', 'ausente'])
  status: 'presente' | 'atrasado' | 'ausente';

  @IsNumber()
  alunoId: number;

  @IsNumber()
  turmaId: number;
}
