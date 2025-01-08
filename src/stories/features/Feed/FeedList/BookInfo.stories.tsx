import BookInfo from '@/features/Feed/components/FeedList/BookInfo';
import type { Meta, StoryObj } from '@storybook/react';
import { Suspense } from 'react';

const meta = {
  title: 'Feed/FeedList/BookInfo',
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

export const Review: Story = {
  args: {
    isMemo: false,
    feedData: {
      id: 'peGMpJB',
      writer: 'Nvk2yed',
      isbn: '9788936434410',
      variant: 0,
      title: '타이틀',
      content: '컨텐츠',
      rating: 3.5,
      tags_pos: ['easy', 'squeeze_time', 'killing_time'],
      tags_neg: ['shallow'],
      date: '2024-12-31T09:17:38.000Z',
      edit: '2024-12-31T09:17:38.000Z',
      like: false,
      like_count: 0,
      comment_count: 0,
    },
  },
};

export const Memo: Story = {
  args: {
    isMemo: true,
    feedData: {
      id: 'peGMpJB',
      writer: 'Nvk2yed',
      isbn: '9788936434410',
      variant: 0,
      title: '타이틀',
      rating: 0,
      content: '컨텐츠',
      tags_pos: ['easy', 'squeeze_time', 'killing_time'],
      tags_neg: ['shallow'],
      date: '2024-12-31T09:17:38.000Z',
      edit: '2024-12-31T09:17:38.000Z',
      like: false,
      like_count: 0,
      comment_count: 0,
    },
  },
};
