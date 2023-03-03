import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BalancePaidService } from './BalancePaid.service';

@ApiTags('Balance')
@Controller('balance-paid')
export class BalanceFinishedController {
  constructor(private balanceFinishedService: BalancePaidService) {}

  @Get()
  getBalanceAvailable() {
    return this.balanceFinishedService.getBalanceAvailable();
  }
}
