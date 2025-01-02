import React from 'react';
import type { Preview } from '@storybook/react';
import QueryProvider from '../src/providers/QueryProvider';
import NextAuthProvider from '../src/providers/NextAuthProvider';
import { initialize, mswLoader } from 'msw-storybook-addon';
import '../src/app/globals.css';
import { handlers } from '../src/__mock__/apiMock';

initialize(); // MSW 초기화 함수

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
    msw: {
      handlers: handlers,
    },
  },
  loaders: [mswLoader],
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
