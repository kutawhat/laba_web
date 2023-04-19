import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Put, Post, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  //Get запрос на получение продуктов:
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  //Get запрос на получение продукта по ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  //PUT запрос на изменение продукта
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProduct: Product) {
    return this.productsService.update(+id, updateProduct);
  }

  //POST запрос на добавление продукта
  @Post()
  create(@Body() createProduct: Product) {
    return this.productsService.create(createProduct);
  }

  //DELETE запрос на удаление продукта
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
