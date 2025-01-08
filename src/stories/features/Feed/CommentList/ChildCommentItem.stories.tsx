import type { Meta, StoryObj } from '@storybook/react';
import ChildCommentItem from '@/features/Feed/components/CommentList/ChildCommentItem';

const meta = {
  title: 'Feed/CommentList/ChildCommentItem',
  component: ChildCommentItem,
  tags: ['autodocs'],
} satisfies Meta<typeof ChildCommentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    contentId: '0',
    isFirstChild: false,
    moreCount: undefined,
    onClickMore: () => {},
    hasMoreButton: false,
    childCommentData: {
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

export const FirstChild: Story = {
  args: {
    contentId: '0',
    isFirstChild: true,
    moreCount: undefined,
    onClickMore: () => {},
    hasMoreButton: true,
    childCommentData: {
      review_id: 'zvE04ej',
      id: 'jeL75g4',
      writer: 'OMvrzvA',
      content: '댓글!',
      date: '2025-01-03T01:56:44.000Z',
      edit: '2025-01-03T01:56:44.000Z',
      reply_count: 2,
      replies: [],
      like: false,
      like_count: 0,
      deleted: false,
    },
  },
};
