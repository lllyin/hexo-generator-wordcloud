function stripHtml(htmlStr = '') {
  const _html = String(htmlStr)
    .replace(/<img(?:\s+[^>]*)?>(.*?)(<\/img\s*>)?/gi, '[图片评论]')
    .replace(/\n?\t?/gi, '')
    .replace(/<\s+(?:\s+[^>]*)?>(.*?)<\/\s+\s*>/gi, '')
    .replace(/<style(?:\s+[^>]*)?>(.*?)<\/style\s*>/gi, '');
  //   .replace(/<exclude-tag(?:\s+[^>]*)?>(.*?)<\/exclude-tag\s*>/gi, '');
  return _html.replace(/<[^>]*>/gi, '').replace(/(\s+)/gi, ' ');
}

function trimText(text) {
  const text2 = String(text)
    .trim()
    .replace(/([。，！～【】\(\)（）《》“”？、：—▲；「」『』])|(\d)|(\s*)/gi, '')
    .replace(/[a-zA-Z]/g, '');
  const cnReg = /[^\u0000-\u00FF]/;

  return cnReg.test(text2) ? text2 : '';
}

module.exports = {
  stripHtml,
  trimText,
};
