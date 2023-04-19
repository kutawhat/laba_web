import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';
import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Put, Post, Param } from '@nestjs/common';

@Controller('Customer')
export class CustomerController {
  constructor(private readonly CustomerService: CustomersService) {}
  //Get запрос на получение клиентов:
  @Get()
  findAll() {
    return this.CustomerService.findAll();
  }

  //Get запрос на получение клиента по телефону
  @Get(':phone')
  findOne(@Param('phone') phone: string) {
    return this.CustomerService.findOne(+phone);
  }

  //PUT запрос на изменение клиента
  @Put(':phone')
  update(@Param('phone') phone: string, @Body() updateCustomer: Customer) {
    return this.CustomerService.update(+phone, updateCustomer);
  }

  //POST запрос на добавление клиента
  @Post()
  create(@Body() createCustomer: Customer) {
    return this.CustomerService.create(createCustomer);
  }

  //DELETE запрос на удаление клиента
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CustomerService.remove(+id);
  }
}
