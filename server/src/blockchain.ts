
import {generateNewBlock,Block} from './block'
export const blockchain = ()=>{
    const chain : Block [] = new Array<Block>();
    //genesisiBlock生成
    chain.push({
        index:1,
        hash:"",
        timestamp:Date.now(),
        data:"Genesis Block"
    });
    return {
        //ブロック追加
        addBlock : (data:string)=>{
            const prev = chain[chain.length-1];
            chain.push(generateNewBlock(prev.index+1,data,prev.hash));
        },
        //全ブロックを閲覧
        showBlocks:()=>{
            chain.map(x=>console.log(`${x.data}/${x.hash}`))
        }
    }
}