import { InMemoryNotificationRepository } from 'test/repositories/inMemoryNotificationRepository';
import { SendNotification } from './sendNotifications';

describe('Send Notifications Use Cases', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'Você recebeu uma solicitação de amizade',
      category: 'social media',
      recipientId: '123',
    });

    expect(notification).toBeTruthy();
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications).toEqual(notification);
  });
});
