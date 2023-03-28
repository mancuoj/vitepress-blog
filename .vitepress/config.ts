import { getPosts } from './theme/utils'

async function config() {
  return {
    title: 'Mancuoj',
    titleTemplate: 'Blog',
    description: 'A VitePress Blog',
    cleanUrls: true,
    themeConfig: {
      posts: await getPosts(),
      pageSize: 6,
      nav: [
        { text: 'Home', link: '/' },
      ],
      socialLinks: [{ icon: 'github', link: 'https://github.com/mancuoj' }],
      aside: false
    }
  }
}

export default config()
