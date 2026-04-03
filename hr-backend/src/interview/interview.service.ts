import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Replicate from 'replicate';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class InterviewService {
  private genAI: GoogleGenerativeAI;
  private replicate: Replicate;

  constructor(private configService: ConfigService) {
    // 1. Gemini (Beyin) Başlatılıyor
    this.genAI = new GoogleGenerativeAI(
    this.configService.get<string>('GEMINI_API_KEY')!
  );
    
    // 2. Replicate (Ses/Video) Başlatılıyor
    this.replicate = new Replicate({
      auth: this.configService.get<string>('REPLICATE_API_TOKEN')!,
    });
  }

  async processInterviewQuestion(question: string) {
    console.log(`[1] İK Sorusu Geldi: "${question}"`);

    // --- ADIM 1: GEMINI İLE MANTIKLI CEVAP ÜRET ---
    const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Sen dijital bir İK asistanısın. 
    OMÜ Bilgisayar Mühendisliği 4. sınıf öğrencisi olan yaratıcını (Beyüphan'ı) temsil ediyorsun.
    Karşında bir insan kaynakları uzmanı var. 
    Şu soruya en fazla 2 cümlelik, diksiyonu düzgün, profesyonel ve kısa bir Türkçe cevap ver.
    Soru: ${question}`;

    const aiResult = await model.generateContent(prompt);
    const aiTextResponse = aiResult.response.text().trim();
    console.log(`[2] LLM Cevabı: "${aiTextResponse}"`);


    // --- MÜHENDİSLİK DOKUNUŞU: LOKAL SESİ BASE64'E ÇEVİRME ---
    // Replicate, localhost'taki bir dosyayı göremez. O yüzden senin wav dosyanı 
    // anlık olarak metne (Base64 Data URI) çevirip API'ye öyle fırlatıyoruz.
    const audioFilePath = path.join(process.cwd(), 'hr_voice_sample.wav');
    const audioBase64 = fs.readFileSync(audioFilePath, { encoding: 'base64' });
    const speakerDataUri = `data:audio/wav;base64,${audioBase64}`;


    // --- ADIM 2: REPLICATE "MAKE A PREDICTION" (SESİ KLONLA) ---
    console.log(`[3] Replicate XTTS v2 modeline prediction isteği atılıyor...`);
    
    const audioOutput = await this.replicate.run(
      "lucataco/xtts-v2:684bc3855b37866c0c65add2ff39c78f3dea3f4ff103a436465326e0f438d55e", 
      {
        input: {
          text: aiTextResponse,
          language: "tr",
          speaker: speakerDataUri // Base64 çevirdiğimiz referans sesin
        }
      }
    );

    console.log(`[4] İşlem Tamam! Üretilen Ses Linki: ${audioOutput}`);

    // Frontend'e hem metni hem de üretilen sesin linkini dönüyoruz
    return {
      question: question,
      answer: aiTextResponse,
      audioUrl: audioOutput
    };
  }
}