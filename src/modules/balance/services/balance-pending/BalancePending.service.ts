import { Injectable } from '@nestjs/common';
import { BalanceRepository } from '../../repository/BalanceRepository';

@Injectable()
export class BalancePendingService {
  constructor(private readonly balanceRepository: BalanceRepository) {}

  async getBalancePending() {
    const allBalancesPending = await this.balanceRepository.getBalancePending();

    return allBalancesPending;
  }
}
