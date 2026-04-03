import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InterviewModule } from './interview/interview.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // .env dosyası için şart
    InterviewModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
