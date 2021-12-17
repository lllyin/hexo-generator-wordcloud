const fs = require('fs');
const { fenci, countTimes } = require('../src/index');
// const { fenci, toArray, countTimes } = require('../src/segment');
const database = require('./database');
const zhonggu = require('./zhonggu.data');
const zhonggu2 = require('./zhonggu.data');

// database.forEach(text => {
//   console.log('text:', text);
//   console.log(fenci(text));
// })

// console.log(toArray(countTimes(fenci(zhonggu))));
fs.writeFileSync('./zhonggu2.json', JSON.stringify(
  fenci(zhonggu2, {
    trim: true,
    exclude: true,
  })
));

// fs.writeFileSync('./zhonggu.json', JSON.stringify(toArray(countTimes(fenci(zhonggu)))));
