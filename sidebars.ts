import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: ['guides/quick-start'],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: ['api/overview', 'api/simulation', 'api/trace'],
    },
    {
      type: 'category',
      label: 'Examples',
      items: ['examples/basic-simulation'],
    },
  ],
};

export default sidebars;
