import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BalanceFinishedService } from './BalanceFinished.service';

@ApiTags('Balance')
@Controller('balance-finished')
export class BalanceFinishedController {
  constructor(private balanceFinishedService: BalanceFinishedService) {}

  @Get()
  getBalanceAvailable() {
    return this.balanceFinishedService.getBalanceAvailable();
  }
}
