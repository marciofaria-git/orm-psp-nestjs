import { Module } from '@nestjs/common';
import { PayableRepository } from '../../repository/PayableRepository';

import { CreatePayableService } from './CreatePayable.service';

@Module({
  providers: [CreatePayableService, PayableRepository],
})
export class CreatePayableModule {}
