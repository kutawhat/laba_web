import { Injectable } from '@nestjs/common';
import { Product } from 'src/my_models/products/product.entity';
import { Worker } from 'src/my_models/workers/worker.entity';
import { Customer } from 'src/my_models/customers/customer.entity';

@Injectable()
export class DatasourceService {
  private products: Product[] = [];
  private workers: Worker[] = [];
  private customers: Customer[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  getWorkers(): Worker[] {
    return this.workers;
  }

  getCustomers(): Customer[] {
    return this.customers;
  }
}
