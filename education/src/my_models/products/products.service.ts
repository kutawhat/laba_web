import { Product } from './product.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Injectable, HttpStatus } from '@nestjs/common';

@Injectable()
export class ProductsService {
  //Конструктор класса сервиса
  constructor(private readonly datasourceService: DatasourceService) {}

  //Метод добавления продукта
  create(product: Product) {
    this.datasourceService.getProducts().push(product);
    return product;
  }

  //Метод для получения продукта по ID:
  findOne(id: number) {
    return this.datasourceService
      .getProducts()
      .find((product) => product.id === id);
  }

  //Метод для получения всех продуктов:
  findAll(): Product[] {
    return this.datasourceService.getProducts();
  }

  //Метод изменения продукта:
  update(id: number, updatedProduct: Product) {
    const index = this.datasourceService
      .getProducts()
      .findIndex((product) => product.id === id);
    this.datasourceService.getProducts()[index] = updatedProduct;
    return this.datasourceService.getProducts()[index];
  }

  //Метод удаления продукта
  remove(id: number) {
    const index = this.datasourceService
      .getProducts()
      .findIndex((product) => product.id === id);
    this.datasourceService.getProducts().splice(index, 1);
    return HttpStatus.OK;
  }
}
