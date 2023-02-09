import { Injectable } from '@nestjs/common';
import { Item } from './item.interface';
import { CreateItem } from './create-item.dto';
import { InjectInMemoryDBService, InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Injectable()
export class ItemService {
  constructor(@InjectInMemoryDBService('item') private readonly db: InMemoryDBService<Item>) {
    this.create({ text: 'Learn nest' });
  }

  findAll(): Item[] {
    return this.db.getAll();
  }

  findOne(id: string): Item {
    return this.db.get(id);
  }

  create(dto: CreateItem): Item {
    const item = {
      text: dto.text,
      updated: Date.now(),
      version: 1,
    };
    return this.db.create(item);
  }

  update(item: Item): Item {
    this.db.update(item);
    return item;
  }


  delete(id: string) {
    this.db.delete(id);
  }
}
