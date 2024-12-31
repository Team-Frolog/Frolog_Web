import React from 'react';
import type { Preview } from '@storybook/react';
import QueryProvider from '../src/providers/QueryProvider';
import NextAuthProvider from '../src/providers/NextAuthProvider';
import '../src/app/globals.css';

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