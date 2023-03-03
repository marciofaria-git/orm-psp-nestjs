import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetPayableByIdService } from './GetPayableById.service';

@Controller('get-payable-by-id')
@ApiTags('Payables')
export class GetPayableByIdController {
  constructor(private getPayableByIdService: GetPayableByIdService) {}
  @Get(':id')
  getPayableById(@Param('id', ParseIntPipe) payableId: number) {
    return this.getPayableByIdService.getPayableById(payableId);
  }
}
