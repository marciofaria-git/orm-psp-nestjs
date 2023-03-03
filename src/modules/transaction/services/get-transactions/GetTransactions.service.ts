import { Injectable } from '@nestjs/common';
import { TransactionRepostitory } from '../../repository/TransactionRepository';

@Injectable()
export class GetTransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionRepostitory,
  ) {}

  async getTransactions() {
    const transactions = await this.transactionsRepository.getTransactions();
    return transactions;
  }
}
