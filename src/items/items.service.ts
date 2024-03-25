import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {

  constructor(@InjectRepository(Item) private itemRepository : Repository<Item>){}

  async create(createItemDto: CreateItemDto) {

    const item = this.itemRepository.create(createItemDto);
    return await this.itemRepository.save(item);
  }

  findAll() {
    return this.itemRepository.find();
  }

  findOne(id: number) {
    return this.itemRepository.findOne({where : {id}});
  }

  async update(id: number, createItemDto: UpdateItemDto) {
    
    const update = await this.itemRepository.findOne({where : {id}});

    Object.assign( update , createItemDto);

    return this.itemRepository.save(update);
  }

  async delete(id: number) {
    
    const del = await this.itemRepository.findOne({where : {id}});

    return await this.itemRepository.remove(del);
  }
}
