import { Injectable } from '@nestjs/common';
import { PayableRepository } from '../../repository/PayableRepository';

@Injectable()
export class GetPayablesService {
  constructor(private readonly payableRepository: PayableRepository) {}

  getPayables() {
    return this.payableRepository.getPayables();
  }
}
