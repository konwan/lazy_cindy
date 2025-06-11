import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/lazy_cindy/", // 需要 / 開頭和結尾
  title: "cindy's doc",
  description: "20250513 update",

  // 20250611 add ga trcking code 
  head: [
    // <script async src="https://www.googletagmanager.com/gtag/js?id=G-KZN8H64ZKJ"></script>
    [
      'script',
      {
        async: true,
        src: `https://www.googletagmanager.com/gtag/js?id=G-KZN8H64ZKJ`,
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-KZN8H64ZKJ');`,
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Product', link: '/memo' }
    ],

    sidebar: [
      {
        text: 'Product',
        collapsed: false,
        items: [
          { text: 'memo', link: '/memo' },
          { text: 'fx2_overview', link: '/fx2_overview' },
          { text: 'spark_overview', link: '/spark_overview' },
          { text: 'new_infra_using_time_overview', link: '/new_infra_using_time_overview' }
        ]
      },
      {
        text: 'n8n',
        items: [
          { text: 'memo', link: '/memo' },
          { text: 'fx2_overview', link: '/fx2_overview' },
          { text: 'spark_overview', link: '/spark_overview' },
          { text: 'new_infra_using_time_overview', link: '/new_infra_using_time_overview' }
        ]
      }
    ]
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
