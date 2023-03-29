import { getPosts } from './theme/utils'

async function config() {
  return {
    title: 'Mancuoj',
    titleTemplate: 'Blog',
    description: 'A VitePress Blog',
    cleanUrls: true,
    lastUpdated: true,
    head: [
      ['link', { rel: 'icon', href: '/article.svg' }],
      ['meta', { name: 'keywords', content: 'mancuoj, blog' }]
    ],
    markdown: {
      // lineNumbers: true,
      theme: {
        light: 'github-light',
        dark: 'github-dark'
      }
    },
    themeConfig: {
      posts: await getPosts(),
      pageSize: 6,
      aside: false,
      // nav: [{ text: 'Home', link: '/' }],
      socialLinks: [{ icon: 'github', link: 'https://github.com/mancuoj' }],
      lastUpdatedText: '上次更新时间',
      editLink: {
        pattern: 'https://github.com/mancuoj/vitepress-blog/edit/main/:path',
        text: '在 GitHub 上修改此页'
      }
    }
  }
}

export default config()
