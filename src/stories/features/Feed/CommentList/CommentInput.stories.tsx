import type { Meta, StoryObj } from '@storybook/react';
import { CommentInput } from '@/features/Feed';
import { useState } from 'react';
import { CommentInputProps } from '@/features/Feed/components/CommentList/CommentInput';

const meta = {
  title: 'Feed/CommentList/CommentInput',
  component: CommentInput,
  tags: ['autodocs'],
} satisfies Meta<typeof CommentInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: CommentInputProps) => {
  const [comment, setComment] = useState('');

  return <CommentInput {...args} comment={comment} setComment={setComment} />;
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    contentId: '0',
    isReview: false,
    comment: '',
    setComment: () => {},
    handleAddComment: () => {},
  },
};
