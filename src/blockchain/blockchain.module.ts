import { Module } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { BlockModule } from 'src/block/block.module';

@Module({
  providers: [BlockchainService],
  imports: [BlockModule],
})
export class BlockchainModule {}
