import { Module } from '@nestjs/common';

import { CreatePayableModule } from './services/create-payable/CreatePayable.module';
import { GetPayableByIdModule } from './services/get-payable-by-id/GetPayableById.module';
import { GetPayablesModule } from './services/get-payables/GetPayables.module';

@Module({
  imports: [GetPayablesModule, CreatePayableModule, GetPayableByIdModule],
})
export class PayablesModule {}
