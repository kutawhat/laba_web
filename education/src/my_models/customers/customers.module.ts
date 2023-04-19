import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerController } from './customers.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [CustomerController],
  providers: [CustomersService],
  imports: [DatasourceModule],
})
export class CustomerModule {}
