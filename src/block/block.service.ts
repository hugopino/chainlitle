import { Injectable } from '@nestjs/common';
import { Block } from './block.interface';
import * as crypto from 'crypto';
import { Transaction } from 'src/transaction/transaction.interface';

@Injectable()
export class BlockService {
  calculateHash({
    previousHash,
    timestamp,
    data,
    nonce,
    difficulty,
  }: {
    previousHash: string;
    timestamp: number;
    data: Transaction[];
    nonce: number;
    difficulty: number;
  }): string {
    return crypto
      .createHash('sha256')
      .update(
        JSON.stringify({ previousHash, timestamp, data, nonce, difficulty }),
      )
      .digest('hex');
  }

  mineBlock(difficulty: number, data: Transaction[], lastBlock: Block): Block {
    let nonce = 0;
    let hash = '';
    while (hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      nonce++;
      hash = this.calculateHash({
        timestamp: Date.now(),
        data,
        previousHash: lastBlock.hash,
        nonce,
        difficulty,
      });
    }
    return {
      timestamp: Date.now(),
      data,
      previousHash: lastBlock.hash,
      hash,
      nonce,
      difficulty,
    };
  }
}
