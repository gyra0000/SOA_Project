import { IsString } from 'class-validator';

export class Book {
  @IsString() title: string;
  @IsString() author: string;
}
