import BookInfo from '@/components/Book/BookInfo';
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { Suspense } from 'react';

const meta = {
  title: 'Common/Book/BookInfo',
  component: BookInfo,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Suspense fallback={<div>Loading...</div>}>
        <Story />
      </Suspense>
    ),
  ],
} satisfies Meta<typeof BookInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bookId: '9788936434410',
    canClick: false,
  },
};
