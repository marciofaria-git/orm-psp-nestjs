import { Injectable } from '@nestjs/common';
import { CreatePaybleDto } from '../../payable/dto/create-payable.dto';
import { PayableStatus } from '../../payable/enum/PayableStatus.enum';
import { PayableRepository } from '../../payable/repository/PayableRepository';

import { PrismaService } from '../../../../src/prisma/prisma.service';
import { CreateTransactionsDto } from '../dto';

import { ITransaction } from '../interfaces/transcation.interface';
import { ITransactionRepository } from './TransactiosRepository.interface';

@Injectable()
export class TransactionRepostitory implements ITransactionRepository {
  constructor(
    readonly prisma: PrismaService,
    readonly payableRepository: PayableRepository,
  ) {}

  async getTransactions(): Promise<ITransaction[]> {
    const allTransaction = await this.prisma.transaction.findMany();

    return allTransaction;
  }

  async createTransaction(
    createTransactionDto: CreateTransactionsDto,
  ): Promise<ITransaction> {
    const { cardNumber } = createTransactionDto;
    const lastFour = cardNumber.slice(cardNumber.length - 4);
    createTransactionDto.cardNumber = lastFour;
    const createTransaction = await this.prisma.transaction.create({
      data: createTransactionDto,
    });

    const transactionDate = createTransaction.createdAt;
    const paymentDate = new Date();
    paymentDate.setDate(transactionDate.getDate() + 30);

    const taxCalculate = (value: number, fee: number) => {
      return value - value * (fee / 100);
    };

    const liquidValue = taxCalculate(createTransaction.value, 5);

    const payableDto: CreatePaybleDto = {
      status: PayableStatus.PENDING,
      paymentDate: paymentDate,
      liquidValue: liquidValue,
    };

    const transactionId = createTransaction.id;
    this.payableRepository.createPayable(transactionId, payableDto);

    return createTransaction;
  }

  async getTransactionById(id: number): Promise<ITransaction> {
    const transactionFound = await this.prisma.transaction.findUnique({
      where: { id },
    });

    return transactionFound;
  }
}
