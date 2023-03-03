import { Injectable } from '@nestjs/common';
import { CreatePaybleDto } from '../../dto/create-payable.dto';
import { PayableRepository } from '../../repository/PayableRepository';

@Injectable()
export class CreatePayableService {
  constructor(private readonly payableRepostiory: PayableRepository) {}

  async createPayable(transId: number, createPayableDto: CreatePaybleDto) {
    const createpayable = await this.payableRepostiory.createPayable(
      transId,
      createPayableDto,
    );
    return createpayable;
  }
}
