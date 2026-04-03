import { Controller, Post, Body } from '@nestjs/common';
import { InterviewService } from './interview.service';

@Controller('interview')
export class InterviewController {
  constructor(private readonly interviewService: InterviewService) {}

  @Post('ask')
  async askQuestion(@Body('question') question: string) {
    console.log('BOMBA: İSTEK SONUNDA GELDİ!');
    // Soru boş gelirse diye ufak bir güvenlik
    if (!question) {
      return { error: "Lütfen bir soru gönderin." };
    }
    
    // Soruyu beyne (Servise) yolluyoruz
    return await this.interviewService.processInterviewQuestion(question);
  }
}