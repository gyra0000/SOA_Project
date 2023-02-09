import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { AuthModule } from './auth/auth.module';
import { BookModule } from  './book/book.module';

@Module({
  imports: [
    InMemoryDBModule.forRoot(),
    CoreModule,
    AuthModule,
    BookModule
  ],
})
export class AppModule {}
