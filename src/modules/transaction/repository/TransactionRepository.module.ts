import { Module } from '@nestjs/common';
import { TransactionRepostitory } from './TransactionRepository';

@Module({
  providers: [TransactionRepostitory],
  exports: [TransactionRepostitory],
})
export class TransactionRepositoryModule {}
