import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockchainModule } from './blockchain/blockchain.module';
import { BlockModule } from './block/block.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [BlockchainModule, BlockModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
