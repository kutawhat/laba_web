import { Module } from '@nestjs/common';
import { ProductsModule } from './my_models/products/products.module';
import { WorkersModule } from './my_models/workers/workers.module';
import { CustomersModule } from './my_models/customers/customers.module';

import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [ProductsModule, WorkersModule, CustomersModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
