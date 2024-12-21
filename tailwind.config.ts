import type { Config } from 'tailwindcss';

const config: Config = {
  presets: [require('@team-frolog/tailwind-config')],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
    './.storybook/preview.tsx',
  ],
};
export default config;
