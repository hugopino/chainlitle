import { Injectable } from '@nestjs/common';

@Injectable()
export class NodeService {
  connectToPeer(peer: string) {
    // connect to peer
  }

  getPeers() {
    // get peers
  }

  broadcast() {}

  getTransactions() {}

  sendLatestBlock() {}

  sendTransaction() {}

  getLatestBlock() {}
}
