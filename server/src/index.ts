import {blockchain} from "./blockchain";

console.log("新規でブロックチェーンを作成...")
const main =blockchain();

console.log("１番目のブロックをマイニング")
main.addBlock("決済１")

console.log("２番目のブロックをマイニング")
main.addBlock("決済２")

main.showBlocks()