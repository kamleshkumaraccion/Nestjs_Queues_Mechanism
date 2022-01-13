import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";
 
@Injectable()
export class FileProducerService{
    constructor(@InjectQueue('file-operation-queue') private queue:Queue){
 
    }
 
    async deleteFile(fileName:string){
        //need to give path of images from local system
        let filePath = `C:/Users/al3997/Desktop/testimages/${fileName}`;
        await this.queue.add('delete-file',{
            filePath: filePath
        });
    }
}