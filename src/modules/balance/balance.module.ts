import { Module } from '@nestjs/common';
import { BalancePaidModule } from './services/balance-paid/BalancePaid.module';

import { BalancePendingModule } from './services/balance-pending/BalancePending.module';

@Module({
  imports: [BalancePaidModule, BalancePendingModule],
})
export class BalanceModule {}
