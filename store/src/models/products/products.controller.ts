import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './products.entity';
import { ProductsService } from './products.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('product')
@ApiTags('Товары')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  @ApiOperation({ summary: 'Получить все товары' })
  findAll() {
    return this.productsService.findAll();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Найти один товар' })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }
  @Get('incomplete')
  @ApiOperation({ summary: 'Неполная информация о товаре' })
  showShort() {
    return this.productsService.showIncomplete();
  }
  @Put(':id')
  @ApiOperation({ summary: 'Обновить позицию' })
  update(@Param('id') id: string, @Body() updateProduct: Product) {
    return this.productsService.update(+id, updateProduct);
  }
  @Post()
  @ApiOperation({ summary: 'Создать новую позицию' })
  create(@Body() createProduct: Product) {
    return this.productsService.create(createProduct);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Удалить позицию позицию' })
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
