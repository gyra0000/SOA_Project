import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [
    InMemoryDBModule.forRoot(),
    UserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
