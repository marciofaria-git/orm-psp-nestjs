import { Module } from '@nestjs/common';

import { CreateTransactionModule } from './services/create-transaction/CreateTransaction.module';
import { GetTransactionByIdModule } from './services/get-transaction-by-id/GetTransactionById.module';
import { GetTransactionsModule } from './services/get-transactions/GetTransactions.module';

@Module({
  imports: [
    GetTransactionsModule,
    CreateTransactionModule,
    GetTransactionByIdModule,
  ],
})
export class TransactionModule {}
