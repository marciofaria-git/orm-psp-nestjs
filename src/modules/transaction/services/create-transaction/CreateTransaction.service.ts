import { Injectable } from '@nestjs/common';
import { CreatePaybleDto } from '../../../payable/dto/create-payable.dto';
import { PayableStatus } from '../../../payable/enum/PayableStatus.enum';
import { CreatePayableService } from '../../../payable/services/create-payable/CreatePayable.service';
import { PrismaService } from '../../../../prisma/prisma.service';
import { CreateTransactionsDto } from '../../dto';

@Injectable()
export class CreateTransactionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly createPayableService: CreatePayableService,
  ) {}

  async createTransaction(dto: CreateTransactionsDto) {
    const transaction = await this.prisma.transaction.create({
      data: {
        ...dto,
      },
    });

    const transactionDate = transaction.createdAt;
    const paymentDate = new Date();
    paymentDate.setDate(transactionDate.getDate() + 30);

    const taxCalculate = (value: number, fee: number) => {
      return value - value * (fee / 100);
    };

    const liquidValue = taxCalculate(transaction.value, 5);

    const payableDto: CreatePaybleDto = {
      status: PayableStatus.PENDING,
      paymentDate: paymentDate,
      liquidValue: liquidValue,
    };

    const transactionId = transaction.id;
    this.createPayableService.createPayable(transactionId, payableDto);
    return transaction;
  }
}
