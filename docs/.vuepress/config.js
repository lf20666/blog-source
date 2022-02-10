module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.jpg',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Favorites', items: [
          { text: '收藏夹', link: '/guide/Favorites/a' }
        ]
      },
      {
        text: 'git操作', items: [
          { text: '命令', link: '/guide/Git/命令' },
          { text: '注意事项', link: '/guide/Git/注意事项' }
        ]
      },
      {
        text: '搜索', items: [
          { text: '百度', link: 'https://www.baidu.com' },
          { text: 'google', link: 'https://google.com' }
        ]
      },
    ],
    sidebar: {
      '/guide/Git/': ['命令', '注意事项'],
      '/': ['']
    }
  },
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }]
  ],
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
}