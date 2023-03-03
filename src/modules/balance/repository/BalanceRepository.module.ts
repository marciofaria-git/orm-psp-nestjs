import { Module } from '@nestjs/common';
import { BalanceRepository } from './BalanceRepository';

@Module({
  providers: [BalanceRepository],
  exports: [BalanceRepository],
})
export class BalanceRepositoryModule {}
