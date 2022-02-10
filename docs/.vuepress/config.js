module.exports = {
  title: 'Hello VuePress',
  description: 'description!',
  themeConfig: {
    logo: '/assets/img/logo.jpg',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Favorites', items: [
          { text: '收藏夹', link: '/guide/Favorites/a' }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ]
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