import globby from 'globby'
import matter from 'gray-matter'

export async function getPosts() {
  const paths = await _getPostsFiles()
  const posts = await Promise.all(
    paths.map(async (post) => {
      const { data } = matter.read(post)
      data.date = _convertDate(data.date)
      return {
        frontMatter: data,
        regularPath: post.replace(/\.md$/, '.html')
      }
    })
  )
  return posts.sort((a, b) => (a.frontMatter.date > b.frontMatter.date ? -1 : 1))
}

async function _getPostsFiles() {
  const paths = await globby('posts/**/*.md', {
    cwd: process.cwd()
  })
  return paths
}

function _convertDate(date = new Date().toString()) {
  const jsonDate = new Date(date).toJSON()
  return jsonDate.split('T')[0]
}
