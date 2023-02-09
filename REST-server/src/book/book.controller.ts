import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  GoneException, Inject,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ClientProxy } from '@nestjs/microservices';
import { BOOK_SERVICE } from './book.constants';
import { Book } from './book';

@UseGuards(JwtAuthGuard)
@Controller('api/book')
export class BookController {
  constructor(
    @Inject(BOOK_SERVICE) private readonly client: ClientProxy,
  ) {}

  @Get()
  async findAll(): Promise<any> {
    this.client.emit('get-books', { type: 'async' });
    const pattern = { cmd: 'get-books' };
    const response = await this.client.send<any>(pattern, "test").toPromise();
    return response;
  }

  @Post()
  async add(@Body() dto: Book): Promise<any> {
    this.client.emit('add-books', { type: 'async' });
    const pattern = { cmd: 'add-books' };

    const response = await this.client.send<any>(pattern, dto).toPromise();
    return response;
  }
}