import { Module } from '@nestjs/common';
import { PayableRepository } from 'src/modules/payable/repository/PayableRepository';
import { TransactionRepostitory } from '../../repository/TransactionRepository';
import { GetTransactionsController } from './GetTransactions.controller';
import { GetTransactionsService } from './GetTransactions.service';

@Module({
  providers: [
    GetTransactionsService,
    TransactionRepostitory,
    PayableRepository,
  ],
  controllers: [GetTransactionsController],
})
export class GetTransactionsModule {}
