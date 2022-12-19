import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/db/database.module';

// acoplador, ponto central pra acoplar os demais arquivos

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
