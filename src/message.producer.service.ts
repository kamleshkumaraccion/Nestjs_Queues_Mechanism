import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job, Queue } from 'bull';
import { delay } from 'rxjs';

@Injectable()
export class MessageProducerService {
  constructor(@InjectQueue('message-queue') private queue: Queue) { }

  // async sendMessage(message: string) {
  //   const jobOptions = {
  //     attempts: 5, // If job fails it will retry till 5 times
  //     backoff: 5000, // static 5 sec delay between retry
  //     delay: 50000,
  //     removeOnComplete: true
  //   }
  //   await this.queue.add('message-job', {
  //     text: message
  //   }, jobOptions);
  // }

  async sendMessage(message: string) {
    let i = 1;
    setInterval(async () => {
      await this.addJob(i);
      i++;
    }, 5000);

  }
  async addJob(id: number) {
    const jobOptions = {
      attempts: 5, // If job fails it will retry till 5 times
      backoff: 5000, // static 5 sec delay between retry
      delay: 3000,
      removeOnComplete: true
    }

    const job: Job = await this.queue.add('message-job', `user: ${id}`, jobOptions);

  }
}