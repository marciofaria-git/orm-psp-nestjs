import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetPayablesService } from './GetPayables.service';

@Controller('payables')
@ApiTags('Payables')
export class GetPayablesController {
  constructor(private getPayablesService: GetPayablesService) {}
  @Get()
  getPayables() {
    return this.getPayablesService.getPayables();
  }
}
