import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/cindy_doc/", // 需要 / 開頭和結尾
  title: "cindy's doc",
  description: "20250513 update",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Product', link: '/memo' }
    ],

    sidebar: [
      {
        text: 'Product',
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
