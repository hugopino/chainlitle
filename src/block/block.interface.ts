export interface Block {
  timestamp: number;
  data: string;
  hash: string;
  previousHash: string;
  nonce: number;
  difficulty: number;
}
