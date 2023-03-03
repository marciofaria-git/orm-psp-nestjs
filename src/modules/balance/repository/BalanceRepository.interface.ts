import { PrismaService } from 'src/prisma/prisma.service';

export interface IBalance {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  paymentDate: Date;
  liquidValue: number;
  transactionId: number;
}

export interface IBalanceRepository {
  readonly prisma: PrismaService;

  getBalancePending(): Promise<IBalance[]>;

  getBalancePaid(): Promise<IBalance[]>;
}
