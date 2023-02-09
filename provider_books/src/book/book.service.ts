import { Injectable } from '@nestjs/common';
import { InjectInMemoryDBService, InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Book } from './book';

@Injectable()
export class bookService {
  constructor(@InjectInMemoryDBService('book') private readonly db: InMemoryDBService<Book>) {
    this.db.createMany(
      [
      {title: "Hamlet", author: "William Shakespeare"},
      {title: "The process", author: "Franz Kafka"},
      {title: "Divina Commedia", author: "Dante Alighieri"}
      ]
    );
  }

  async findAll(): Promise<Book[]> {
    return this.db.getAll();
  }

  create(dto: Book): Book {
    const book = {
      title: dto.title,
      author: dto.author,
     };
    return this.db.create(book);
  }
}