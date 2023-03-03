import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreatePaybleDto } from '../dto/create-payable.dto';
import { IPayable } from '../interfaces/payable.interface';
import { IPayableRepository } from './PayableRepository.interface';

@Injectable()
export class PayableRepository implements IPayableRepository {
  constructor(readonly prisma: PrismaService) {}

  async getPayables(): Promise<IPayable[]> {
    const allPayables = await this.prisma.payable.findMany();

    return allPayables;
  }

  async getPayableById(id: number): Promise<IPayable> {
    const payableFound = await this.prisma.payable.findUnique({
      where: { id },
    });

    return payableFound;
  }

  async createPayable(
    transId: number,
    createPayableDto: CreatePaybleDto,
  ): Promise<IPayable> {
    const payable = await this.prisma.payable.create({
      data: {
        transactionId: transId,

        ...createPayableDto,
      },
    });

    return payable;
  }
}
