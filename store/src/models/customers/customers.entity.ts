import { Product } from 'src/models/products/products.entity';
import { Store } from 'src/models/stores/stores.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('customers')
export class Customer {
  @ApiProperty({ example: '1', description: 'ID' })
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({
    example: 'Иван Иванов Иванович',
    description: 'ФИО',
  })
  @Column()
  fullname: string;
  @ApiProperty({ example: '88005553535', description: 'Телефон' })
  @Column()
  phone: number;
  @ApiProperty({
    example: '123456789',
    description: 'Номер бонусной карты',
  })
  @Column()
  bonuscard: number;
  @ManyToMany((type) => Product, (product) => product.customers)
  @JoinTable({
    name: 'customerы_productы',
    joinColumn: { name: 'customer_id' },
    inverseJoinColumn: { name: 'product_id' },
  })
  products: Product[];

  // @ManyToMany((type) => Store, (store) => store.customers)
  // @JoinTable({
  //   name: 'store_customer',
  //   joinColumn: { name: 'customer_id' },
  //   inverseJoinColumn: { name: 'store_id' },
  // })
  stores: Store[];
}
