// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import Blog from './components/Blog.vue'
import Comment from './components/Comment.vue'
import './style.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(Blog),
      'doc-after': () => h(Comment)
    })
  },
  enhanceApp({ app, router, siteData }) {}
}
