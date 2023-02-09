import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BOOK_SERVICE } from './book.constants';

@Module({
  imports: [
    ClientsModule.register([{ name: BOOK_SERVICE, transport: Transport.TCP, options: { host: 'localhost', port: 3011}} ])
  ],
  controllers: [BookController],
  providers: []
})
export class BookModule {}
