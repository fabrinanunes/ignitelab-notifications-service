import { PrismaService } from './prima.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// acoplador, ponto central pra acoplar os demais arquivos

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
