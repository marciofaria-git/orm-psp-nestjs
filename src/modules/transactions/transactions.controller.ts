import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTransactionsDto } from './dto';
import { TransactionService } from './transactions.service';

@Controller('transactions')
@ApiTags('Transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}
  @Get()
  getTransactions(transId: number) {
    return this.transactionService.getTransactions(transId);
  }
  @Post()
  @HttpCode(HttpStatus.OK)
  createTransaction(@Body() dto: CreateTransactionsDto) {
    return this.createTransaction(dto);
  }
  @Get()
  getTransactionById(@Param('id', ParseIntPipe) transactionId: number) {
    return this.getTransactionById(transactionId);
  }
}
