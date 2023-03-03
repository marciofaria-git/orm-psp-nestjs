import { Module } from '@nestjs/common';
import { BalanceRepository } from '../../repository/BalanceRepository';
import { BalanceFinishedController } from './BalanceFinished.controller';
import { BalanceFinishedService } from './BalanceFinished.service';

@Module({
  providers: [BalanceFinishedService, BalanceRepository],
  controllers: [BalanceFinishedController],
})
export class BalanceFinishedModule {}
