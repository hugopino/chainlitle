import { Injectable } from '@nestjs/common';
import { Block } from 'src/block/block.interface';

@Injectable()
export class BlockchainService {
  chain: Block[] = [];

  constructor() {
    this.chain.push(this.createGenesisBlock());
  }

  createGenesisBlock(): Block {
    return {
      timestamp: Date.now(),
      data: [],
      previousHash: '0',
      hash: '0',
      nonce: 0,
      difficulty: 0,
    };
  }

  getLastBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  addBlock(block: Block): void {
    this.chain.push(block);
  }

  isChainValid(): boolean {
    return true;
  }
}
