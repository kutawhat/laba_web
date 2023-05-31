import { HttpStatus, Injectable } from '@nestjs/common';
import { DatasourceService } from '../../datasource/datasource.service';
import { Product } from './products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from 'src/models/customers/customers.entity';
import { IncompleteProductDto } from './dto/incomplete-product.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(product: Product): Promise<Product> {
    return await this.productRepository.save(product);
  }
  async findAll(): Promise<Product[]> {
    const products = await this.productRepository.find({
      relations: {
        customers: true,
      },
    });
    return products;
  }

  async findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({
      where: { id },
      relations: { customers: true },
    });
  }
  async update(id: number, updatedProduct: Product) {
    const product = await this.productRepository.findOne({
      where: { id },
    });
    product.price = updatedProduct.price;
    product.description = updatedProduct.description;
    product.customers = updatedProduct.customers;
    product.name = updatedProduct.name;
    await this.productRepository.save(product);
    return product;
  }
  async remove(id: number) {
    this.productRepository.delete({ id });
  }

  async showIncomplete(): Promise<IncompleteProductDto[]> {
    const products = await this.productRepository.find({
      relations: {
        customers: true,
      },
    });
    const IncompleteProducts: IncompleteProductDto[] = products.map(
      (product) => {
        const incompleteProduct = new IncompleteProductDto();
        incompleteProduct.name = product.name;
        incompleteProduct.price = product.price;
        return incompleteProduct;
      },
    );
    return IncompleteProducts;
  }
}
