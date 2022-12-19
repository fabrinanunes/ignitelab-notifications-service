import { DatabaseModule } from './../db/database.module';
import { SendNotification } from './../../app/useCases/sendNotifications';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
