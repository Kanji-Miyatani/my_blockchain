"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNewBlock = void 0;
const crypto = require("crypto");
const generateNewBlock = (index, data, previousHash) => {
    //ハッシュ値計算
    const calculateHash = (block) => {
        const dataConcated = block.index + block.timestamp + block.hash;
        +block.data;
        return crypto
            .createHash('sha256')
            .update(dataConcated)
            .digest('hex');
    };
    const timestamp = Date.now();
    const hash = calculateHash({ index, timestamp, hash: previousHash, data });
    return {
        index: index,
        hash: hash,
        timestamp: timestamp,
        data: data
    };
};
exports.generateNewBlock = generateNewBlock;
