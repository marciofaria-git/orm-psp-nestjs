import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PayableStatus } from 'src/modules/payable/enum/PayableStatus.enum';
import { PrismaService } from '../../src/prisma/prisma.service';

@Injectable()
export class CronService {
  constructor(private prisma: PrismaService) {}

  @Cron('*/10 * * * * *')
  async checkPaymentStatus() {
    const getPayables = await this.prisma.payable.findMany();

    for (const payable of getPayables) {
      const paymentDate = payable.paymentDate;
      const dateVerify = new Date();

      if (
        dateVerify.getDate() <= paymentDate.getDate() &&
        paymentDate.getDate() <= 30 &&
        payable.status === PayableStatus.PENDING
      ) {
        return this.prisma.payable.update({
          where: { id: payable.id },
          data: {
            status: PayableStatus.PAID,
          },
        });
      }
    }
  }
}
