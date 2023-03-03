import { Module } from '@nestjs/common';
import { PayableRepository } from './PayableRepository';

@Module({
  providers: [PayableRepository],
  exports: [PayableRepository],
})
export class PayableRepositoryModule {}
