import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { AboutBook } from '@/features/Book';

const meta = {
  title: 'Book/AboutBook',
  component: AboutBook,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Suspense fallback={<div>Loading...</div>}>
        <Story />
      </Suspense>
    ),
  ],
} satisfies Meta<typeof AboutBook>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bookId: '9788936434410',
  },
};
