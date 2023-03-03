import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TransactionModule } from './modules/transaction/transactions.module';
import { PrismaModule } from './prisma/prisma.module';

import { PayablesModule } from './modules/payable/payables.module';
import { BalanceModule } from './modules/balance/balance.module';
import configuration from './config/app.config';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron/cron.service';

@Module({
  imports: [
    TransactionModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    ScheduleModule.forRoot(),
    PayablesModule,
    BalanceModule,
  ],
  providers: [CronService],
})
export class AppModule {}
