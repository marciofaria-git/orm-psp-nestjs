import { Module } from '@nestjs/common';
import { PayableRepositoryModule } from 'src/modules/payable/repository/PayableRepository.module';
import { CreatePayableService } from 'src/modules/payable/services/create-payable/CreatePayable.service';
import { TransactionRepostitory } from '../../repository/TransactionRepository';
import { CreateTransactionController } from './CreateTransaction.controller';
import { CreateTransactionService } from './CreateTransaction.service';

@Module({
  providers: [
    CreateTransactionService,
    CreatePayableService,
    TransactionRepostitory,
  ],
  controllers: [CreateTransactionController],
  imports: [PayableRepositoryModule],
})
export class CreateTransactionModule {}
