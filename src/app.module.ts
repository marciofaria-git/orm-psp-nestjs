import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TransactionModule } from './modules/transactions/transactions.module';
import { PrismaModule } from './prisma/prisma.module';
import configuration from './config/app.config';

@Module({
  imports: [
    TransactionModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
  ],
})
export class AppModule {}
