import { BullQueueEvents, OnQueueActive, OnQueueCompleted, OnQueueEvent, OnQueueProgress, OnQueueRemoved, OnQueueWaiting, Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
 
@Processor('message-queue')
export class MessageConsumer {
 
    @Process('message-job')
    readOperationJob(job:Job<unknown>){
        console.log(job.data);
    }
    
    @OnQueueActive()
    onActive(job: Job){
        console.log(`Job in Active ${job.name}`)
    }

    @OnQueueWaiting()
    onWaiting(jobId: number){
        console.log(`Job in Waiting mode ${jobId}`)
    }

    @OnQueueCompleted()
    onCompleted(job: Job){
        console.log(`Job completed ${job.name}`)
    }

    @OnQueueRemoved()
    onQueueRemoved(job: Job){
        console.log(`Job removed ${job.name}`)
    }


    @OnQueueEvent(BullQueueEvents.COMPLETED)
    onJobCompleted(job: Job) {
    console.log(
      `Completed job ${job.id} of type ${job.name} with result ${
        job.returnvalue
        }`,
    );
  }
}