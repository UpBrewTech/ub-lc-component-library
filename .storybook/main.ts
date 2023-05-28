import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.features.@(js|jsx|ts|tsx)',
    '../src/**/*.components.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
