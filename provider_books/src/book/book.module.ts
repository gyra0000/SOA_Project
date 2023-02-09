import { Module } from '@nestjs/common';
import { bookService } from './book.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [
    InMemoryDBModule.forFeature('book', {}),
  ],
  providers: [bookService],
  exports: [bookService],
})
export class BookModule {}
