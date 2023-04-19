import { Module } from '@nestjs/common';
import { DatasourceService } from './datasource.service';
@Module({
  providers: [DatasourceService], //указали что у нас есть сервис внутри модуля
  exports: [DatasourceService], //разрешаем экспортировать сервис в другие модули
})
export class DatasourceModule {}
