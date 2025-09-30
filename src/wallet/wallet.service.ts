import { Injectable } from '@nestjs/common';

@Injectable()
export class WalletService {
  generateWallet() {
    // create wallet
  }

  getBalance(address: string) {
    // get balance
  }

  sendTransaction(from: string, to: string, amount: number) {
    // send transaction
  }

  getTransactions(address: string) {
    // get transactions
  }

  getTransaction(hash: string) {
    // get transaction
  }
}
