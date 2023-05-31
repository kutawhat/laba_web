import { HttpStatus, Injectable } from '@nestjs/common';
import { Store } from './stores.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from 'src/models/customers/customers.entity';
import { IncompleteStoreDto } from './dto/incomplete-store.dto';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(store: Store): Promise<Store> {
    return await this.storeRepository.save(store);
  }
  async findAll(): Promise<Store[]> {
    const stores = await this.storeRepository.find({
      relations: {
        customers: true,
      },
    });
    return stores;
  }

  async findOne(id: number): Promise<Store> {
    return this.storeRepository.findOne({
      where: { id },
      relations: { customers: true },
    });
  }
  async update(id: number, updatedStore: Store) {
    const store = await this.storeRepository.findOne({ where: { id } });
    store.name = updatedStore.name;
    store.address = updatedStore.address;
    await this.storeRepository.save(store);
    return store;
  }
  async remove(id: number) {
    this.storeRepository.delete({ id });
  }

  async showGrade(): Promise<IncompleteStoreDto[]> {
    const stores = await this.storeRepository.find({
      relations: {
        customers: true,
      },
    });
    const IncompleteStores: IncompleteStoreDto[] = stores.map((store) => {
      const incompleteStore = new IncompleteStoreDto();
      incompleteStore.name = store.name;
      incompleteStore.address = store.address;
      return incompleteStore;
    });
    return IncompleteStores;
  }
}
