import { Injectable } from '@nestjs/common';
import { Content, Notification } from '../entities';
import { NotificationsRepository } from '../repositories';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

export interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return { notification };
  }
}
