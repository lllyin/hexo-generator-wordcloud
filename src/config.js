const excludeWords = [
  '‍',
  '之乎者也于其兮以而的为矣乎何'.split(''),
  '一二三四五六七八九0123456789'.split(''),
  '不有在与'.split(''),
  ['题图', '北京', '时间', '主持', '本期', '图片', '局部', '评论', '北京时间'],
].flat();

module.exports = {
  excludeWords,
};
