import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você tem uma nova solicitação de amizade :D'),
      recipientId: '66seis',
      category: 'largato',
    });

    expect(notification).toBeTruthy();
  });
});
