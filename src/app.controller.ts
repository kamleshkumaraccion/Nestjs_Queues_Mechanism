import { Controller, Get, Query } from '@nestjs/common';
import { FileProducerService } from './file.producer.service';
import { MessageProducerService } from './message.producer.service';
 
@Controller()
export class AppController {
  constructor(
    private readonly messageProducerService:MessageProducerService,
    private readonly fileProducerService:FileProducerService) {}
	
  @Get('invoke-msg')
  getInvokeMsg(@Query('msg') msg:string){
    this.messageProducerService.sendMessage(msg);
    return msg;
  }

  @Get('remove-file')
  async deleteFile(@Query('file') file:string){
    await this.fileProducerService.deleteFile(file);
    return 'file deleted';
  }
}
