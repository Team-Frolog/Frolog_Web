import React from 'react';
import type { Preview } from '@storybook/react';
import QueryProvider from '../src/providers/QueryProvider';
import NextAuthProvider from '../src/providers/NextAuthProvider';
import localFont from 'next/font/local';
import '../src/app/globals.css';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
  preload: true,
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;

export const decorators = [
  (Story) => (
    <QueryProvider>
      <NextAuthProvider>
        <Story />
      </NextAuthProvider>
    </QueryProvider>
  ),
];
