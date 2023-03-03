import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePaybleDto } from '../../dto/create-payable.dto';
import { CreatePayableService } from './CreatePayable.service';

@Controller('create-payable')
@ApiTags('Payables')
export class CreatePayableController {
  constructor(private createPayableService: CreatePayableService) {}
  @Post()
  @HttpCode(HttpStatus.OK)
  createPayable(@Body() transId: number, dto: CreatePaybleDto) {
    return this.createPayableService.createPayable(transId, dto);
  }
}
