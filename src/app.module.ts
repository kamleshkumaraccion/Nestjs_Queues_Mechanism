import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileConsumer } from './file.consumer';
import { FileProducerService } from './file.producer.service';
import { MessageConsumer } from './message.consumer';
import { MessageProducerService } from './message.producer.service';
 
@Module({
  imports: [
    BullModule.forRoot('first-queue',{
      redis: {
        host: 'localhost',
        port: 5008,
      },
    }),
    BullModule.forRoot('second-queue',{
      redis: {
        host: 'localhost',
        port: 5008,
      },
    }),
    BullModule.registerQueue({
      configKey:  'first-queue',
      name:'message-queue'
    },
    { 
      configKey: 'second-queue',
      name: 'file-operation-queue',
    })
  ],
  controllers: [AppController],
  providers: [AppService, MessageProducerService, MessageConsumer, FileProducerService, FileConsumer],
})
export class AppModule {}
