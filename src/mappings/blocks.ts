import {
  Address,
  Bytes,
  BigInt,
} from "@graphprotocol/graph-ts";

import { Block } from "../../generated/schema";

export class EthereumBlock {
  hash: Bytes;
  parentHash: Bytes;
  unclesHash: Bytes;
  author: Address;
  stateRoot: Bytes;
  transactionsRoot: Bytes;
  receiptsRoot: Bytes;
  number: BigInt;
  gasUsed: BigInt;
  gasLimit: BigInt;
  timestamp: BigInt;
  difficulty: BigInt;
  totalDifficulty: BigInt;
  size: BigInt | null;
}

export function handleBlock(block: EthereumBlock): void {
  let id = block.hash.toHex();
  let blockEntity = new Block(id);
  blockEntity.number = block.number;
  blockEntity.timestamp = block.timestamp;
  blockEntity.parentHash = block.parentHash.toHex();
  blockEntity.author = block.author.toHex();
  blockEntity.difficulty = block.difficulty;
  blockEntity.totalDifficulty = block.totalDifficulty;
  blockEntity.gasUsed = block.gasUsed;
  blockEntity.gasLimit = block.gasLimit;
  blockEntity.receiptsRoot = block.receiptsRoot.toHex();
  blockEntity.transactionsRoot = block.transactionsRoot.toHex();
  blockEntity.stateRoot = block.stateRoot.toHex();
  blockEntity.size = block.size;
  blockEntity.unclesHash = block.unclesHash.toHex();
  blockEntity.save();
}
