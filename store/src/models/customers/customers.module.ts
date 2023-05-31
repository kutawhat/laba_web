import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { Product } from 'src/models/products/products.entity';
import { Store } from 'src/models/stores/stores.entity';
import { CustomerController } from './customers.controller';
import { Customer } from './customers.entity';
import { CustomersService } from './customers.service';

@Module({
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Product, Customer, Store]),
  ],
  controllers: [CustomerController],
  providers: [CustomersService],
})
export class CustomersModule {}
