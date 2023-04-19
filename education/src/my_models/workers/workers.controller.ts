import { WorkersService } from './workers.service';
import { Worker } from './worker.entity';
import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Put, Post, Param } from '@nestjs/common';

@Controller('workers')
export class WorkersController {
  constructor(private readonly workersService: WorkersService) {}
  //Get запрос на получение работников:
  @Get()
  findAll() {
    return this.workersService.findAll();
  }

  //Get запрос на получение работника по зарплате
  @Get(':salary')
  findOne(@Param('salary') salary: string) {
    return this.workersService.findOne(+salary);
  }

  //PUT запрос на изменение работника
  @Put(':id')
  update(@Param('id') id: string, @Body() updateWorkers: Worker) {
    return this.workersService.update(+id, updateWorkers);
  }

  //POST запрос на добавление работника
  @Post()
  create(@Body() createWorkers: Worker) {
    return this.workersService.create(createWorkers);
  }

  //DELETE запрос на удаление работника
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workersService.remove(+id);
  }
}
