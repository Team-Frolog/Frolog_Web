import type { Meta, StoryObj } from '@storybook/react';
import FollowItem from '@/features/Profile/components/FollowList/FollowItem';

const meta = {
  title: 'Profile/Follow/FollowItem',
  component: FollowItem,
  tags: ['autodocs'],
} satisfies Meta<typeof FollowItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Follow: Story = {
  args: {
    userId: '0',
    targetUser: {
      id: '0',
      username: '테스터',
      reading_preference: null,
      image: undefined,
      follow: true,
    },
  },
};

export const Unfollow: Story = {
  args: {
    userId: '0',
    targetUser: {
      id: '0',
      username: '테스터',
      reading_preference: null,
      image: undefined,
      follow: false,
    },
  },
};
