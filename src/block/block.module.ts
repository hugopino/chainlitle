import { Module } from '@nestjs/common';
import { BlockService } from './block.service';
import { TransactionModule } from 'src/transaction/transaction.module';

@Module({
  providers: [BlockService],
  exports: [BlockService],
  imports: [TransactionModule],
})
export class BlockModule {}
