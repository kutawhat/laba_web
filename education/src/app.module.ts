import { Module } from '@nestjs/common';
import { ProductsModule } from './my_models/products/products.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [ProductsModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
