import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "Zappool",
  description: "A proxy mining pool for small home miner devices",
  appearance: "dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/what' },
      { text: 'QuickStart', link: '/quick' },
      { text: 'HowTo', link: '/howto' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Dashboard', link: 'https://dashboard.zappool.org/' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'What is Zappool?', link: '/what' },
          { text: 'QuickStart', link: '/quick' },
          { text: 'Roadmap', link: '/roadmap' }
        ]
      },
      {
        text: 'Docs',
        items: [
          { text: 'HowTo', link: './howto' },
          { text: 'FAQ', link: './faq' },
          { text: 'Accounting', link: './rewards' },
          { text: 'Tech', link: './tech' },
          { text: 'Links', link: './links' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zappool/zappool-web' },
    ]
  },
})
