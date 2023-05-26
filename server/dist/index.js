"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blockchain_1 = require("./blockchain");
console.log("新規でブロックチェーンを作成...");
const main = (0, blockchain_1.blockchain)();
console.log("１番目のブロックをマイニング");
main.addBlock("決済１");
console.log("２番目のブロックをマイニング");
main.addBlock("決済２");
main.showBlocks();
