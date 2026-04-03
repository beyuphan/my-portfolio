import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InterviewController } from './interview.controller';
import { InterviewService } from './interview.service';

@Module({
  imports: [ConfigModule],
  controllers: [InterviewController],
  providers: [InterviewService],
})
export class InterviewModule {}