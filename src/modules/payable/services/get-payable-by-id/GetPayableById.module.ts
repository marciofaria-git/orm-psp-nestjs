import { Module } from '@nestjs/common';
import { PayableRepository } from '../../repository/PayableRepository';
import { GetPayableByIdController } from './GetPayableById.controller';
import { GetPayableByIdService } from './GetPayableById.service';

@Module({
  controllers: [GetPayableByIdController],
  providers: [GetPayableByIdService, PayableRepository],
})
export class GetPayableByIdModule {}
