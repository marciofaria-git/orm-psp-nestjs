import { Module } from '@nestjs/common';

import { BalanceFinishedModule } from './services/balance-finished/BalanceFinished.module';
import { BalancePendingModule } from './services/balance-pending/BalancePending.module';

@Module({
  imports: [BalanceFinishedModule, BalancePendingModule],
})
export class BalanceModule {}
