import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connectToDb } from './db/dbConnect';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req,res, next) => connectToDb(next));
  await app.listen(3000);
}
bootstrap();
