function stripHtml(htmlStr = '') {
  const htmlText = String(htmlStr)
    .replace(/<img(?:\s+[^>]*)?>(.*?)(<\/img\s*>)?/gi, '[图片评论]')
    .replace(/时间|主持人|东八区|校注/g, '')
    .replace(/\d+月\d+日/g, '')
    .replace(/\d+:\d+/g, '')
    .replace(/\n?\t?/gi, '')
    .replace(/<\s+(?:\s+[^>]*)?>(.*?)<\/\s+\s*>/gi, '')
    .replace(/<style(?:\s+[^>]*)?>(.*?)<\/style\s*>/gi, '')
  //   .replace(/<exclude-tag(?:\s+[^>]*)?>(.*?)<\/exclude-tag\s*>/gi, '');
  return htmlText.replace(/<[^>]*>/gi, '').replace(/(\s+)/gi, ' ')
}

function trimText(text) {
  const text2 = String(text)
    .trim()
    .replace(
      /([。，！～【】（）《》“”‘？、：—▲；「」『』〖〗－,.!．丶āǎōǒīǐūǔēě□])|(\d)|(\s*)/gi,
      '',
    )
    .replace(/[a-zA-Z]/g, '')
  const cnReg = /[^\u0000-\u00FF]/

  return cnReg.test(text2) ? text2 : ''
}

module.exports = {
  stripHtml,
  trimText,
}
