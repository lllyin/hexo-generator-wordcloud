const path = require('path');
const nodejieba = require('nodejieba');
const { excludeWords } = require('./config');
const { trimText, stripHtml } = require('./utils');

nodejieba.load({
  userDict: path.resolve(__dirname, './dics/jiayan.dict.utf8'),
  // userDict: path.resolve(__dirname, './dics/lyin.dic.utf8'),
  // userDict: path.resolve(__dirname, './dics/gum.dic.utf8'),
  // hmmDict: path.resolve(__dirname, './dics/gum.dic.utf8'),
});

function countTimes(data) {
  const k = {};

  data.forEach((item) => {
    const { word } = item;
    if (k[word]) {
      k[word].value += 1;
    } else {
      k[word] = {
        ...item,
        name: word,
        value: 1,
      };
    }
  });

  return Object.values(k).sort((a, b) => b.value - a.value).filter(v => v.value > 10);
}

function fenci(_text, { trim = true, exclude = true } = {}) {
  const text = stripHtml(_text);
  let result = nodejieba.tag(text, true);

  if (trim) {
    result = result.filter((item) => trimText(item.word));
  }

  if (exclude) {
    result = result.filter((item) => !excludeWords.includes(item.word));
  }

  return countTimes(result);
}


module.exports = {
  fenci,
  countTimes,
};
