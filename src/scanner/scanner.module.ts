import { Module } from '@nestjs/common';
import { ScannerController } from './scanner.controller';
import { AlunosModule } from '../alunos/alunos.module';
import { PresencasModule } from '../presencas/presencas.module';

@Module({
  imports: [AlunosModule, PresencasModule],
  controllers: [ScannerController],
})
export class ScannerModule {}
