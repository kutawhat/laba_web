import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { Customer } from 'src/models/customers/customers.entity';
import { StoreController } from './stores.controller';
import { Store } from './stores.entity';
import { StoresService } from './stores.service';

@Module({
  imports: [DatasourceModule, TypeOrmModule.forFeature([Store, Customer])],
  controllers: [StoreController],
  providers: [StoresService],
})
export class StoresModule {}
