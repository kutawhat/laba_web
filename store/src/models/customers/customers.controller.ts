import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Customer } from './customers.entity';
import { CustomersService } from './customers.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IncompleteCustomerDto } from './dto/incomplete-customer.dto';

@Controller('customers')
@ApiTags('Покупатели')
export class CustomerController {
  constructor(private readonly customersService: CustomersService) {}
  @Get()
  @ApiOperation({ summary: ' Получить покупателя' })
  findAll() {
    return this.customersService.findAll();
  }
  @Get(':id')
  @ApiOperation({ summary: ' Получить покупателя по id' })
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: ' Обновление покупателя по id' })
  update(@Param('id') id: string, @Body() updateCustomer: Customer) {
    return this.customersService.update(+id, updateCustomer);
  }
  @ApiOperation({ summary: 'Добавление покупателя по id' })
  @Post()
  create(@Body() createCustomer: Customer): Promise<Customer> {
    return this.customersService.create(createCustomer);
  }
  @ApiOperation({ summary: 'Удаление покупателя по id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
