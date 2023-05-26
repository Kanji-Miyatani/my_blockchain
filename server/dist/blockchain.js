"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockchain = void 0;
const block_1 = require("./block");
const blockchain = () => {
    const chain = new Array();
    //genesisiBlock生成
    chain.push({
        index: 1,
        hash: "",
        timestamp: Date.now(),
        data: "Genesis Block"
    });
    return {
        //ブロック追加
        addBlock: (data) => {
            const prev = chain[chain.length - 1];
            chain.push((0, block_1.generateNewBlock)(prev.index + 1, data, prev.hash));
        },
        //全ブロックを閲覧
        showBlocks: () => {
            chain.map(x => console.log(`${x.data}/${x.hash}`));
        }
    };
};
exports.blockchain = blockchain;
