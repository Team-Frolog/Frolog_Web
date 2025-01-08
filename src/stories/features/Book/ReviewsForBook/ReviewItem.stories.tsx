import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import ReviewItem from '@/features/Book/components/ReviewsForBook/ReviewItem';

const meta = {
  title: 'Book/ReviewsForBook/ReviewItem',
  component: ReviewItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Suspense fallback={<div>Loading...</div>}>
        <Story />
      </Suspense>
    ),
  ],
} satisfies Meta<typeof ReviewItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    reviewData: {
      id: 'pv4DQvV',
      writer: 'RXgYmgQ',
      isbn: '9788936434120',
      variant: 0,
      title: '타이틀',
      content: '컨텐츠',
      rating: 4,
      tags_pos: ['killing_time'],
      tags_neg: ['biased'],
      date: '2024-12-18T03:11:31.000Z',
      edit: '2024-12-18T03:11:31.000Z',
      like: false,
      like_count: 1,
      comment_count: 0,
    },
    category: 'novel',
    onClickLike: () => {},
  },
};
