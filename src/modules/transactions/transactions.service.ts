import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionsDto } from './dto';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}
  getTransactions(transId: number) {
    return this.prisma.transaction.findMany({
      where: {
        id: transId,
      },
    });
  }
  async createTransaction(dto: CreateTransactionsDto) {
    const transaction = await this.prisma.transaction.create({
      data: {
        ...dto,
      },
    });
    return transaction;
  }
  getTransactionById(transId: number) {
    return this.prisma.transaction.findFirst({
      where: {
        id: transId,
      },
    });
  }
}
