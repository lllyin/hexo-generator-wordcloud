var nodejieba = require('nodejieba');

var sentence = '我是拖拉机学院手扶拖拉机专业的。不用多久，我就会升职加薪，当上CEO，走上人生巅峰。';

var result;

// 没有主动调用nodejieba.load载入词典的时候，
// 会在第一次调用cut或者其他需要词典的函数时，自动载入默认词典。
// 词典只会被加载一次。
result = nodejieba.cut(sentence);
console.log('cut:\n', result);

result = nodejieba.cut(sentence, true);
console.log('cut true:\n', result);

result = nodejieba.cutHMM(sentence);
console.log('cutHMM:\n', result);

result = nodejieba.cutAll(sentence);
console.log('cutAll:\n', result);

result = nodejieba.cutForSearch(sentence);
console.log('cutForSearch:\n', result);

result = nodejieba.tag(sentence);
console.log('tag:\n', result);

var topN = 5;
result = nodejieba.extract(sentence, topN);
console.log('extract:\n', result);

result = nodejieba.cut('男默女泪');
console.log('cut:\n', result);
nodejieba.insertWord('男默女泪');
result = nodejieba.cut('男默女泪');
console.log('after insertWord cut:\n', result);

result = nodejieba.cutSmall('南京市长江大桥', 3);
console.log('cutSmall:\n', result);
