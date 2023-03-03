import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { getTransactions } from './decorators/getTransactions.decorator';
import { GetTransactionsService } from './GetTransactions.service';

@Controller('transactions')
@ApiTags('Transactions')
export class GetTransactionsController {
  constructor(private readonly transactionService: GetTransactionsService) {}

  @getTransactions()
  @Get()
  getTransactions() {
    const getTransactions = this.transactionService.getTransactions();

    return getTransactions;
  }
}
