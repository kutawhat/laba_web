import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Store } from './stores.entity';
import { StoresService } from './stores.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('stores')
@ApiTags('Магазины')
export class StoreController {
  constructor(private readonly storesService: StoresService) {}

  @Get()
  findAll() {
    return this.storesService.findAll();
  }
  @Get('grade')
  showGrade() {
    return this.storesService.showGrade();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateStore: Store) {
    return this.storesService.update(+id, updateStore);
  }
  @Post()
  create(@Body() createStore: Store) {
    return this.storesService.create(createStore);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storesService.remove(+id);
  }

  // @Get('incomplete')
  // findIncomplete() {
  //   this.storesService.findIncomplete();
  // }
}
