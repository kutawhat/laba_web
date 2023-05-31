import { Customer } from 'src/models/customers/customers.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  price: number;
  @Column()
  description: string;
  @ManyToMany((type) => Customer, (customer) => customer.products)
  @JoinTable({
    name: 'customer_product',
    joinColumn: { name: 'product_id' },
    inverseJoinColumn: { name: 'customer_id' },
  })
  customers: Customer[];
}
