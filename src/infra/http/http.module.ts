import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';
import { NotificationsController } from './controllers';
import { SendNotification } from './../../app/use-cases';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
