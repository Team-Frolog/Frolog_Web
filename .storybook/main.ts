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
    '@storybook/addon-jest',
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
  webpackFinal: async (config) => {
    if (!config.module || !config.module.rules) {
      return config;
    }

    config.module.rules = [
      ...config.module.rules.map((rule) => {
        if (!rule || rule === '...') {
          return rule;
        }

        if (rule.test && /svg/.test(String(rule.test))) {
          return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
      }),
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ];

    return config;
  },
};
export default config;
