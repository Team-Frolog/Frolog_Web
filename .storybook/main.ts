import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-styling',
    '@storybook/addon-styling-webpack',
    '@storybook/addon-postcss',
    '@tomfreudenberg/next-auth-mock/storybook',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    defaultName: 'Docs',
    autodocs: true,
  },
  staticDirs: ['../public'],
};
export default config;
