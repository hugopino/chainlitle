import { Injectable } from '@nestjs/common';
import { Block } from 'src/block/block.interface';
import { Blockchain } from './blockchain.interface';
import { BlockService } from 'src/block/block.service';

@Injectable()
export class BlockchainService {
  chain: Blockchain = [];

  constructor(private readonly blockService: BlockService) {
    this.chain.push(this.createGenesisBlock());
  }

  createGenesisBlock(): Block {
    const timestamp = Date.now();
    return {
      timestamp,
      data: [],
      previousHash: '0',
      hash: this.blockService.calculateHash({
        previousHash: '0',
        timestamp,
        data: [],
        nonce: 0,
        difficulty: 0,
      }),
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

  isChainValid(chain: Blockchain): boolean {
    if (chain.length === 0) return false;

    for (let i = 0; i < chain.length; i++) {
      const currentBlock = chain[i];
      const previousHash = i === 0 ? '0' : chain[i - 1].hash;
      if (currentBlock.previousHash !== previousHash) {
        return false;
      }
      const recalculatedHash = this.blockService.calculateHash(currentBlock);
      if (currentBlock.hash !== recalculatedHash) {
        return false;
      }
      if (!currentBlock.hash.startsWith('0'.repeat(currentBlock.difficulty))) {
        return false;
      }
    }

    return true;
  }
  //   funciton to compare if a chain is longer than the current chain
  isChainLonger(chain: Blockchain): boolean {
    if (!this.isChainValid(chain)) {
      return false;
    }
    return chain.length > this.chain.length;
  }
}
