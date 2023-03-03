import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTransactionsDto } from '../../dto';
import { CreateTransactionService } from './CreateTransaction.service';

@Controller('create-transaction')
@ApiTags('Transactions')
export class CreateTransactionController {
  constructor(private readonly transactionService: CreateTransactionService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  createTransaction(@Body() dto: CreateTransactionsDto) {
    return this.transactionService.createTransaction(dto);
  }
}
