import type { Meta, StoryObj } from '@storybook/react';
import { ReviewDetail } from '@/features/Review';

const meta = {
  title: 'Review/ReviewDetail',
  component: ReviewDetail,
  tags: ['autodocs'],
} satisfies Meta<typeof ReviewDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    reviewDetail: {
      id: 'pv4DQvV',
      writer: 'RXgYmgQ',
      isbn: '9788936434120',
      variant: 0,
      title: '제목',
      content: '컨텐츠',
      rating: 4.5,
      tags_pos: ['killing_time'],
      tags_neg: ['biased'],
      date: '2024-12-18T03:11:31.000Z',
      edit: '2024-12-18T03:11:31.000Z',
      like: false,
      like_count: 1,
      comment_count: 0,
    },
  },
};
