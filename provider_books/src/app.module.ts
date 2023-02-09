import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { BookModule } from './book/book.module';

@Module({
  imports: [InMemoryDBModule.forRoot(), BookModule],
  controllers: [AppController],
})
export class AppModule {}
