import { Injectable } from '@nestjs/common';
import { Customer } from 'src/models/customers/customers.entity';
import { Store } from 'src/models/stores/stores.entity';
import { Product } from '../models/products/products.entity';

@Injectable()
export class DatasourceService {
  private stores: Store[] = [];
  private customers: Customer[] = [];
  private products: Product[] = [];

  GetStores(): Store[] {
    return this.stores;
  }
  GetCustomers(): Customer[] {
    return this.customers;
  }
  GetProducts(): Product[] {
    return this.products;
  }
}
