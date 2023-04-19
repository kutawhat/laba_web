import { Customer } from './customer.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Injectable, HttpStatus } from '@nestjs/common';

@Injectable()
export class CustomersService {
  //Конструктор класса сервиса
  constructor(private readonly datasourceService: DatasourceService) {}

  //Метод добавления клиента
  create(customer: Customer) {
    this.datasourceService.getCustomers().push(customer);
    return customer;
  }

  //Метод для получения клиента по ID:
  findOne(id: number) {
    return this.datasourceService
      .getCustomers()
      .find((customer) => customer.id === id);
  }

  //Метод для получения всех клиентов:
  findAll(): Customer[] {
    return this.datasourceService.getCustomers();
  }

  //Метод изменения клиента:
  update(id: number, updatedCustomer: Customer) {
    const index = this.datasourceService
      .getCustomers()
      .findIndex((customer) => customer.id === id);
    this.datasourceService.getCustomers()[index] = updatedCustomer;
    return this.datasourceService.getCustomers()[index];
  }

  //Метод удаления клиента
  remove(id: number) {
    const index = this.datasourceService
      .getCustomers()
      .findIndex((customer) => customer.id === id);
    this.datasourceService.getCustomers().splice(index, 1);
    return HttpStatus.OK;
  }
}
