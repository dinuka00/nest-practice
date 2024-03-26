import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [ TypeOrmModule.forRoot(dataSourceOptions)
    ,
    ItemsModule],
  
})
export class AppModule {}
