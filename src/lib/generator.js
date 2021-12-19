const { stripHtml } = require('../utils/common')
const { getformatwordclouddata } = require('./core')

function mergeContent(locals) {
  let content = ''

  locals.posts.forEach((post) => {
    content += stripHtml(post.content)
  })

  return content
}

module.exports = function run(locals) {
  const content = mergeContent(locals)
  return {
    path: '/wordcloud.json',
    data: `wordcloudata=${JSON.stringify(getformatwordclouddata(content))}`,
  }
}
