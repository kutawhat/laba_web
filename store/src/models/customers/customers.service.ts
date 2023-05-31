import { Injectable } from '@nestjs/common';
import { Customer } from './customers.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from 'src/models/stores/stores.entity';
import { Product } from 'src/models/products/products.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(customer: Customer): Promise<Customer> {
    return await this.customerRepository.save(customer);
  }
  async findAll(): Promise<Customer[]> {
    const customers = await this.customerRepository.find({
      relations: {
        stores: true,
        products: true,
      },
    });
    return customers;
  }
  async findOne(id: number): Promise<Customer> {
    return this.customerRepository.findOne({
      where: { id },
      relations: { products: true, stores: true },
    });
  }
  async update(id: number, updatedCustomer: Customer) {
    const customer = await this.customerRepository.findOne({ where: { id } });
    customer.fullname = updatedCustomer.fullname;
    customer.phone = updatedCustomer.phone;
    customer.bonuscard = updatedCustomer.bonuscard;
    await this.customerRepository.save(customer);
    return customer;
  }
  async remove(id: number) {
    this.customerRepository.delete({ id });
  }
}
