import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BalancePendingService } from './BalancePending.service';

@ApiTags('Balance')
@Controller('balance-pending')
export class BalancePendingController {
  constructor(private balancePendingService: BalancePendingService) {}

  @Get()
  getBalanceAvailable() {
    return this.balancePendingService.getBalancePending();
  }
}
