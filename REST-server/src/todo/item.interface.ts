import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { IsString, IsInt } from 'class-validator';

export class Item implements InMemoryDBEntity {
  @IsString() id: string;
  @IsString() text: string;
  @IsInt() updated: number;
  @IsInt() version: number;
}
