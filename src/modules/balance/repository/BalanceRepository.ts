import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IBalance, IBalanceRepository } from './BalanceRepository.interface';

@Injectable()
export class BalanceRepository implements IBalanceRepository {
  constructor(readonly prisma: PrismaService) {}

  getBalancePending(): Promise<IBalance[]> {
    const balancePending = this.prisma.payable.findMany({
      where: {
        status: 'pending',
      },
    });
    return balancePending;
  }

  getBalanceFinished(): Promise<IBalance[]> {
    const balanceAvailable = this.prisma.payable.findMany({
      where: {
        status: 'finished',
      },
    });
    return balanceAvailable;
  }
}
