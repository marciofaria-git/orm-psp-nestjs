import { Injectable } from '@nestjs/common';

import { PayableRepository } from '../../repository/PayableRepository';

@Injectable()
export class GetPayableByIdService {
  constructor(private readonly payableRepository: PayableRepository) {}

  async getPayableById(id: number) {
    const payableFound = await this.payableRepository.getPayableById(id);
    return payableFound;
  }
}
