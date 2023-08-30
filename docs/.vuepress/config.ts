import { defineUserConfig, defaultTheme, HeadConfig } from 'vuepress'
import navbar from './navbar.json'
import sidebar from './sidebar.json'

const head: HeadConfig[] = [['link', { rel: 'icon', href: '/favicon.ico' }]]

export default defineUserConfig({
  head,
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '面向对象的程序设计（Python）',
      description: '北京师范大学研究生学位专业必修课程'
    }
  },
  theme: defaultTheme({
    repo: 'https://github.com/frederick-wang/graduate.bnupython.com',
    docsDir: 'docs',
    locales: {
      '/': {
        notFound: ['你似乎来到了没有知识存在的荒原...'],
        selectLanguageText: '选择语言',
        selectLanguageName: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        backToHome: '返回首页',
        navbar,
        sidebar
      }
    }
  })
})
