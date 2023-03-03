import { Injectable } from '@nestjs/common';
import { TransactionRepostitory } from '../../repository/TransactionRepository';

@Injectable()
export class GetTransactionByIdService {
  constructor(private readonly transactionRepository: TransactionRepostitory) {}

  getTransactionById(id: number) {
    return this.transactionRepository.getTransactionById(id);
  }
}
