import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { TransactionsMessages } from '../../../enums/transactions.enum';

export function getTransactions(): PropertyDecorator {
  return applyDecorators(
    ApiResponse({
      status: HttpStatus.OK,
      description: TransactionsMessages.GET_ALL_TRANSACTIONS,
    }),
  );
}
