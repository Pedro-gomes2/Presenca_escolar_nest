import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessoresService } from './services/professores.service';
import { ProfessoresController } from './controllers/professores.controller';
import { Professor } from './entities/professor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Professor])],
  controllers: [ProfessoresController],
  providers: [ProfessoresService],
  exports: [ProfessoresService],
})
export class ProfessoresModule { }
