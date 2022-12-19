import { NotificationRepository } from 'src/app/repositories/notificationRepository';
import { PrismaService } from './prisma/prima.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaService,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
