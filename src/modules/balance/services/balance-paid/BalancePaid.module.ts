import { Module } from '@nestjs/common';
import { BalanceRepository } from '../../repository/BalanceRepository';
import { BalanceFinishedController } from './BalancePaid.controller';
import { BalancePaidService } from './BalancePaid.service';

@Module({
  providers: [BalancePaidService, BalanceRepository],
  controllers: [BalanceFinishedController],
})
export class BalancePaidModule {}
