import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { IsString } from 'class-validator';

export class Book implements InMemoryDBEntity {
  @IsString() id: string;
  @IsString() title: string;
  @IsString() author: string;

  constructor() {
    this.id = "1";
    this.author = "Autor1";
    this.title = "Titlul1";
  }
}
