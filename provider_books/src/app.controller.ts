import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { Book } from './book/book';
import { bookService } from './book/book.service';

@Controller()
export class AppController {
  constructor(
    private readonly bookService: bookService,
  ) {}

  @MessagePattern({ cmd: 'get-books' })
  async getBooks(data: string): Promise<Book[]> {
    return await this.bookService.findAll();
  }

  @MessagePattern({ cmd: 'add-books' })
  async addBook(data: Book): Promise<Book> {
    return await this.bookService.create(data);
  }

  @EventPattern('get-books')
  async handleUserCreated(data: Record<string, unknown>) {
    console.log('get-books', data);
  }
}
