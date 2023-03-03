import { Module } from '@nestjs/common';
import { PayableRepository } from 'src/modules/payable/repository/PayableRepository';
import { PayableRepositoryModule } from 'src/modules/payable/repository/PayableRepository.module';
import { TransactionRepostitory } from '../../repository/TransactionRepository';
import { CreateTransactionController } from './CreateTransaction.controller';
import { CreateTransactionService } from './CreateTransaction.service';

@Module({
  providers: [
    CreateTransactionService,
    PayableRepository,
    TransactionRepostitory,
  ],
  controllers: [CreateTransactionController],
  imports: [PayableRepositoryModule],
})
export class CreateTransactionModule {}
