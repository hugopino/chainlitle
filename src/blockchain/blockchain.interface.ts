import { Block } from 'src/block/block.interface';
import { Transaction } from 'src/transaction/transaction.interface';

export type Blockchain = Block[];
export type Mempool = Transaction[];
