import type { Meta, StoryObj } from '@storybook/react';
import FeedBar from '@/features/Feed/components/FeedList/FeedBar';

const meta = {
  title: 'Feed/FeedList/FeedBar',
  component: FeedBar,
  tags: ['autodocs'],
} satisfies Meta<typeof FeedBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClickComment: () => {},
    onClickLike: () => {},
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
