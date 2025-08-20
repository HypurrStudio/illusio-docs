import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Illusio Docs',
  tagline: 'HyperEVM Transaction Simulator',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.ioapi/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://hypurrstudio.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/illusio/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '0xNilesh', // Usually your GitHub org/user name.
  projectName: 'Illusio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          editUrl:
            'https://github.com/hypurrstudio/illusio-docs/tree/main/docs-website/',
          routeBasePath: '/', // Set docs as the default route
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Illusio Docs',
      logo: {
        alt: 'Illusio Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'dropdown',
          label: 'Resources',
          position: 'left',
          items: [
            {
              label: 'API Reference',
              to: '/docs/api/overview',
            },
            {
              label: 'Examples',
              to: '/docs/examples/basic-simulation',
            },
          ],
        },
        {
          href: 'https://github.com/hypurrstudio/illusio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/guides/quick-start',
            },
            {
              label: 'API Reference',
              to: '/api/overview',
            },
            {
              label: 'Examples',
              to: '/examples/basic-simulation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/hypurrstudio',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hypurrstudio/illusio',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'HyperEVM',
              href: 'https://hyperliquid.xyz',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/hypurrstudio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Illusio. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
