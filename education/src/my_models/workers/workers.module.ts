import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [WorkersController],
  providers: [WorkersService],
  imports: [DatasourceModule],
})
export class WorkersModule {}
