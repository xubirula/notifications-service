import { InMemoryNotificationsRepository } from './../../../test/repositories';
// import { Notification } from '../entities';
import { SendNotification } from './send-notification';

// const notifications: Notification[] = [];

// const notificationsRepositoryFake = {
//   async create(notification: Notification) {
//     notifications.push(notification);
//   },
// };

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: '123',
      category: 'largato',
      content: 'some content',
    });

    expect(notification).toBeTruthy();
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
