import { Transaction } from 'src/transaction/transaction.interface';

export interface Block {
  timestamp: number;
  data: Transaction[];
  hash: string;
  previousHash: string;
  nonce: number;
  difficulty: number;
}
