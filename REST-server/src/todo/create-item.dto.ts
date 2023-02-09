import { IsString } from 'class-validator';

export class CreateItem {
  @IsString() text: string;
}
