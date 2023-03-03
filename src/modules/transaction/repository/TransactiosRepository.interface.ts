import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionsDto } from '../dto';

import { ITransaction } from '../interfaces/transcation.interface';

export interface ITransactionRepository {
  readonly prisma: PrismaService;

  getTransactions(): Promise<ITransaction[]>;

  createTransaction(
    createTransactionDto: CreateTransactionsDto,
  ): Promise<ITransaction>;

  getTransactionById(id: number): Promise<ITransaction>;
}
