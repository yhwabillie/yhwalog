import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import 'dotenv/config'

const config: Config = {
  title: 'yhwalog',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: process.env.WEBSITE_URL,
  baseUrl: process.env.BASE_URL,
  organizationName: process.env.ORGANIZATION_NAME,
  projectName: process.env.PROJECT_NAME,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  presets: [
    [
      'classic',
      {
        blog: false,
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        googleTagManager: {
          containerId: process.env.GOOGLE_TAG_ID,
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params
            const items = await defaultCreateSitemapItems(rest)
            return items.filter((item) => !item.url.includes('/yhwalog/'))
          },
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    metadata: [
      { name: 'keywords', content: 'yhwalog, 기술 블로그, 프론트 개발, 웹 개발, 웹, 프론트 개발자, 웹 퍼블리셔, 웹퍼블리셔, UI, UX' },
      { name: 'robots', content: 'index, follow' },
    ],
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'yhwalog',
      logo: {
        alt: 'yhwalog Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Logs',
        },
        {
          href: 'https://github.com/yhwabillie',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} yhwalog, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
