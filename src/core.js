const path = require('path');
const nodejieba = require('nodejieba');

nodejieba.load({
  userDict: path.resolve(__dirname, './dics/jiayan.dict.utf8'),
  // userDict: path.resolve(__dirname, './dics/lyin.dic.utf8'),
  // userDict: path.resolve(__dirname, './dics/gum.dic.utf8'),
  // hmmDict: path.resolve(__dirname, './dics/gum.dic.utf8'),
});

export function cut(cut) {
   var result = nodejieba.cut("南京市长江大桥");
  console.log(result);
}

export function fenci() {
  
}