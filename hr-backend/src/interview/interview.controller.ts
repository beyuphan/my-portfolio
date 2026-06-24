import { Controller, Post, Body, UseGuards, BadRequestException } from '@nestjs/common';
import { InterviewService } from './interview.service';
import { RateLimitGuard } from '../common/rate-limit.guard';

@Controller('interview')
export class InterviewController {
  // Service'i constructor içinde içeri alıyoruz (Dependency Injection)
  constructor(private readonly interviewService: InterviewService) {}

  @Post('ask')
  @UseGuards(RateLimitGuard)
  async askQuestion(@Body() body: { question: string }) {
    const question = (body?.question || '').trim();

    // Girdi doğrulama — boş veya aşırı uzun soruları reddet (maliyet/abuse koruması)
    if (!question) {
      throw new BadRequestException('Soru boş olamaz.');
    }
    if (question.length > 300) {
      throw new BadRequestException('Soru çok uzun (en fazla 300 karakter).');
    }

    // Gelen soruyu Gemini + Replicate mantığına gönderiyoruz
    return this.interviewService.processInterviewQuestion(question);
  }
}
