import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma nova notificação!');

    expect(content).toBeTruthy();
  });

  it('should NOT be able to create a notification content with less than 5 chars', () => {
    expect(() => new Content('xxx')).toThrow();
  });

  it('should NOT be able to create a notification content with more than 240 chars', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
