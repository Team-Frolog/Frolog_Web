import LikeButton from '@/components/Button/LikeButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/LikeButton',
  component: LikeButton,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '좋아요 버튼',
  },
} satisfies Meta<typeof LikeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLiked: false,
    likeCount: 1,
    onClickLike: () => {},
  },
};

export const Liked: Story = {
  args: {
    isLiked: true,
    likeCount: 2,
    onClickLike: () => {},
  },
};
