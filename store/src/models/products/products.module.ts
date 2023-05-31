import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Customer } from 'src/models/customers/customers.entity';
import { DatasourceModule } from '../../datasource/datasource.module';
import { ProductController } from './products.controller';
import { Product } from './products.entity';
import { ProductsService } from './products.service';

@Module({
  imports: [DatasourceModule, TypeOrmModule.forFeature([Product, Customer])],
  controllers: [ProductController],
  providers: [ProductsService],
})
export class ProductModule {}
