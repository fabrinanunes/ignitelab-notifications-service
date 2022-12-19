import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notifications';
import { NotificationRepository } from '../repositories/notificationRepository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    req: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = req;

    const notification = new Notification({
      recipientId,
      category,
      content: new Content(content),
    });

    await this.notificationRepository.create(notification);

    return { notification };
  }
}
