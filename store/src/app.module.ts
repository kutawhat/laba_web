import { Module } from '@nestjs/common';
import { ProductModule } from './models/products/products.module';
import { CustomersModule } from './models/customers/customers.module';
import { StoresModule } from './models//stores/stores.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './models/products/products.entity';
import { Store } from './models//stores/stores.entity';
import { Customer } from './models//customers/customers.entity';

@Module({
  imports: [
    StoresModule,
    ProductModule,
    CustomersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5440,
      host: 'localhost',
      // database: 'store',
      username: 'ku',
      password: '1234',
      synchronize: false,
      logging: 'all',
      entities: [Product, Store, Customer],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
