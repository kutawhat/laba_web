import { Customer } from 'src/models/customers/customers.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('stores')
export class Store {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column()
  address: string;

  @ManyToMany((type) => Customer, (customer) => customer.stores)
  @JoinTable({
    name: 'store_customer',
    joinColumn: { name: 'store_id' },
    inverseJoinColumn: { name: 'customer_id' },
  })
  customers: Customer[];
}
