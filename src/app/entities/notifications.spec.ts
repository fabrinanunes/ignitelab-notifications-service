import { Content } from './content';
import { Notification } from './notifications';

describe('Notification Entity', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma solicitação de amizade'),
      category: 'social media',
      recipientId: '123',
    });

    expect(notification).toBeTruthy();
  });
});
