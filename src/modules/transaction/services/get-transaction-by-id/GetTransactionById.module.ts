import { Module } from '@nestjs/common';
import { PayableRepository } from 'src/modules/payable/repository/PayableRepository';
import { TransactionRepostitory } from '../../repository/TransactionRepository';
import { GetTransactionByIdController } from './GetTransactionById.controller';
import { GetTransactionByIdService } from './GetTransactionById.service';

@Module({
  providers: [
    GetTransactionByIdService,
    TransactionRepostitory,
    PayableRepository,
  ],
  controllers: [GetTransactionByIdController],
})
export class GetTransactionByIdModule {}
