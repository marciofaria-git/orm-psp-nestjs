import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { GetTransactionByIdService } from './GetTransactionById.service';

@Controller('get-transaction-by-id')
@ApiTags('Transactions')
export class GetTransactionByIdController {
  constructor(private transactionService: GetTransactionByIdService) {}

  @Get(':id')
  getTransactionById(@Param('id', ParseIntPipe) transactionId: number) {
    return this.transactionService.getTransactionById(transactionId);
  }
}
