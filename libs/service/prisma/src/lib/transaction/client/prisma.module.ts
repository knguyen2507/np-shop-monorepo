import { Module } from '@nestjs/common';
import { TransactionPrismaService } from './prisma.service';

@Module({
  providers: [TransactionPrismaService],
  exports: [TransactionPrismaService],
})
export class TransactionPrismaModule {}
