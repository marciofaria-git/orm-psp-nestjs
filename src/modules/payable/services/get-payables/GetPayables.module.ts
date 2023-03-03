import { Module } from '@nestjs/common';
import { GetPayablesService } from './GetPayables.service';
import { GetPayablesController } from './GetPayables.controller';
import { PayableRepository } from '../../repository/PayableRepository';

@Module({
  providers: [GetPayablesService, PayableRepository],
  controllers: [GetPayablesController],
})
export class GetPayablesModule {}
