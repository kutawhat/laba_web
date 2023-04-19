import { Worker } from './worker.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Injectable, HttpStatus } from '@nestjs/common';

@Injectable()
export class WorkersService {
  //Конструктор класса сервиса
  constructor(private readonly datasourceService: DatasourceService) {}

  //Метод добавления работника
  create(worker: Worker) {
    this.datasourceService.getWorkers().push(worker);
    return worker;
  }

  //Метод для получения работника по ID:
  findOne(id: number) {
    return this.datasourceService
      .getWorkers()
      .find((worker) => worker.id === id);
  }

  //Метод для получения всех работников:
  findAll(): Worker[] {
    return this.datasourceService.getWorkers();
  }

  //Метод изменения работника:
  update(id: number, updatedWorker: Worker) {
    const index = this.datasourceService
      .getWorkers()
      .findIndex((worker) => worker.id === id);
    this.datasourceService.getWorkers()[index] = updatedWorker;
    return this.datasourceService.getWorkers()[index];
  }

  //Метод удаления работника
  remove(id: number) {
    const index = this.datasourceService
      .getWorkers()
      .findIndex((worker) => worker.id === id);
    this.datasourceService.getWorkers().splice(index, 1);
    return HttpStatus.OK;
  }
}
