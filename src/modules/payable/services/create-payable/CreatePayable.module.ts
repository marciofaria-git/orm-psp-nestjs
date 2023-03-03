import { Module } from '@nestjs/common';
import { PayableRepository } from '../../repository/PayableRepository';
import { CreatePayableController } from './CreatePayable.controller';
import { CreatePayableService } from './CreatePayable.service';

@Module({
  providers: [CreatePayableService, PayableRepository],
  controllers: [CreatePayableController],
})
export class CreatePayableModule {}
