import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // İzin verilen origin'ler .env'den (virgülle ayrılmış); yoksa hepsine izin ver (dev).
  const origins = process.env.FRONTEND_ORIGIN
    ? process.env.FRONTEND_ORIGIN.split(',').map((o) => o.trim())
    : true;

  app.enableCors({
    origin: origins,
    methods: ['GET', 'POST'],
  });

  const port = parseInt(process.env.PORT || '3000', 10);
  await app.listen(port, '0.0.0.0');

  console.log(`Uygulama şu an şurada çalışıyor: ${await app.getUrl()}`);
}
bootstrap();
