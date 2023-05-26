import * as crypto from 'crypto';
export interface Block {
    index: number,
    hash: string,
    timestamp: number,
    data: string
}
//新しいブロックを取得
export const generateNewBlock = (
    index:number , data : string, previousHash : string):Block =>{
    //ハッシュ値計算
    const calculateHash =(
        block:Block): string=> {
        const dataConcated = block.index + block.timestamp + block.hash;
        + block.data;
        return crypto
        .createHash('sha256')
        .update(dataConcated) 
        .digest('hex'); 
    }
    const timestamp:number = Date.now()
    const hash = calculateHash({index,timestamp,hash:previousHash,data});
    
    return {
       index : index,
       hash : hash,
       timestamp :timestamp,
       data:data
    }
   
}