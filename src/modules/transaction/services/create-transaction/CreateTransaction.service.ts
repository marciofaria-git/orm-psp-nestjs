import { Injectable } from '@nestjs/common';
import { CreateTransactionsDto } from '../../dto';
import { TransactionRepostitory } from '../../repository/TransactionRepository';

@Injectable()
export class CreateTransactionService {
  constructor(private readonly transactionRepository: TransactionRepostitory) {}

  async createTransaction(dto: CreateTransactionsDto) {
    const transaction = await this.transactionRepository.createTransaction(dto);

    return transaction;
  }
}
