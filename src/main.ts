import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

const testUri = process.env.MONGODB_URI;
console.log('DEBUG: MONGODB_URI in main.ts:', testUri ? 'LOADED' : 'NOT LOADED');

if (!testUri) {
  console.error('CRITICAL ERROR: MONGODB_URI is undefined in main.ts. The .env file might be missing or misconfigured.');
  process.exit(1);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for your Angular frontend
  app.enableCors({
    origin: 'http://localhost:4200', // Your Angular app URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  
  await app.listen(process.env.PORT ?? 3000);
  console.log('Backend server running on http://localhost:3000');
}
bootstrap();
