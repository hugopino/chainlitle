import { Injectable } from '@nestjs/common';
import { Block } from './block.interface';
import * as crypto from 'crypto';
import { Transaction } from 'src/transaction/transaction.interface';

@Injectable()
export class BlockService {
  calculateHash(
    block: Pick<
      Block,
      'previousHash' | 'timestamp' | 'data' | 'nonce' | 'difficulty'
    >,
  ): string {
    const { previousHash, timestamp, data, nonce, difficulty } = block;
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
