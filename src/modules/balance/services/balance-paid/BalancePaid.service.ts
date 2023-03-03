import { Injectable } from '@nestjs/common';
import { BalanceRepository } from '../../repository/BalanceRepository';

@Injectable()
export class BalancePaidService {
  constructor(private readonly balanceRepository: BalanceRepository) {}

  async getBalanceAvailable() {
    const allBalanceAvailable = await this.balanceRepository.getBalancePaid();

    return allBalanceAvailable;
  }
}
