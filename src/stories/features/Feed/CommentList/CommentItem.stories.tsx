import type { Meta, StoryObj } from '@storybook/react';
import CommentItem from '@/features/Feed/components/CommentList/CommentItem';

const meta = {
  title: 'Feed/CommentList/CommentItem',
  component: CommentItem,
  tags: ['autodocs'],
} satisfies Meta<typeof CommentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    contentId: '0',
    commentData: {
      review_id: 'zvE04ej',
      id: 'jeL75g4',
      writer: 'OMvrzvA',
      content: '댓글!',
      date: '2025-01-03T01:56:44.000Z',
      edit: '2025-01-03T01:56:44.000Z',
      reply_count: 0,
      replies: [],
      like: false,
      like_count: 0,
      deleted: false,
    },
  },
};
