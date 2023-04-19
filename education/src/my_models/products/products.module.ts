import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [DatasourceModule],
})
export class ProductsModule {}
