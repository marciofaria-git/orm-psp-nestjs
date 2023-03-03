import { Module } from '@nestjs/common';
import { BalanceRepository } from '../../repository/BalanceRepository';
import { BalancePendingController } from './BalancePending.controller';
import { BalancePendingService } from './BalancePending.service';

@Module({
  providers: [BalancePendingService, BalanceRepository],
  controllers: [BalancePendingController],
})
export class BalancePendingModule {}
