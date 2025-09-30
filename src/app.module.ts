import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockchainModule } from './blockchain/blockchain.module';
import { BlockModule } from './block/block.module';
import { TransactionModule } from './transaction/transaction.module';
import { MinerModule } from './miner/miner.module';
import { NodeModule } from './node/node.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [
    BlockchainModule,
    BlockModule,
    TransactionModule,
    MinerModule,
    NodeModule,
    WalletModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
