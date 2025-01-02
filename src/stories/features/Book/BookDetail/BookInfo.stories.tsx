import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BookInfo from '@/features/Book/components/BookDetail/BookInfo';

const meta = {
  title: 'Book/BookDetail/BookInfo',
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
  },
};
