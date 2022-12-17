import { PrismaService } from './infra/prima.service';
import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';

// acoplador, ponto central pra acoplar os demais arquivos

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
