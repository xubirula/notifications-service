import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from '../../../../app/entities';
import { NotificationsRepository } from '../../../../app/repositories';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        recipientId: notification.recipientId,
        category: notification.category,
        content: notification.content.value,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
