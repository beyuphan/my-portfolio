import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // React (Frontend) uygulamamızın bu API'ye erişebilmesi için kapıları açıyoruz
  app.enableCors(); 
  
  await app.listen(3000, '0.0.0.0');
  
  console.log(`Uygulama şu an şurada çalışıyor: ${await app.getUrl()}`);
}
bootstrap();