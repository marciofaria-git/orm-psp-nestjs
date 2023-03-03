import { Injectable } from '@nestjs/common';
import { PayableStatus } from '../../../../src/modules/payable/enum/PayableStatus.enum';
import { PrismaService } from '../../../../src/prisma/prisma.service';
import { IBalance, IBalanceRepository } from './BalanceRepository.interface';

@Injectable()
export class BalanceRepository implements IBalanceRepository {
  constructor(readonly prisma: PrismaService) {}

  getBalancePending(): Promise<IBalance[]> {
    const balancePending = this.prisma.payable.findMany({
      where: {
        status: PayableStatus.PENDING,
      },
    });
    return balancePending;
  }

  getBalanceFinished(): Promise<IBalance[]> {
    const balanceAvailable = this.prisma.payable.findMany({
      where: {
        status: PayableStatus.PAID,
      },
    });
    return balanceAvailable;
  }
}
