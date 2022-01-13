import { OnGlobalQueueCompleted, Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import * as fs from 'fs';

@Processor('file-operation-queue')
export class FileConsumer {

    @Process('delete-file')
    async filedeletionJob(job: Job<unknown>) {
        let jobData: any = job.data;
        await fs.unlinkSync(jobData.filePath);

    }

    // @OnGlobalQueueCompleted()
    // async onGlobalCompleted(jobId: number, result: any) {
    //     const job = await this.queue.getJob(jobId);
    //     console.log('(Global) on completed: job ', job.id, ' -> result: ', result);
    // }
}