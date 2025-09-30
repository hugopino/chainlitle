import { Module } from '@nestjs/common';
import { MinerService } from './miner.service';

@Module({
  providers: [MinerService]
})
export class MinerModule {}
