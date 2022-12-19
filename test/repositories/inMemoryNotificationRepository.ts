//in memory db

import { Notification } from 'src/app/entities/notifications';
import { NotificationRepository } from 'src/app/repositories/notificationRepository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
