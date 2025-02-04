import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ProfileHeader from '@/components/Header/ProfileHeader';

const meta = {
  title: 'Common/Header/ProfileHeader',
  component: ProfileHeader,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Suspense fallback={<div>Loading...</div>}>
        <Story />
      </Suspense>
    ),
  ],
} satisfies Meta<typeof ProfileHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Feed: Story = {
  args: {
    type: 'feed',
    userId: '0',
    isDeleted: false,
    hasFollow: true,
    isChildComment: false,
    onClick: () => {},
    onDelete: () => {},
  },
};

export const ChildComment: Story = {
  args: {
    type: 'comment',
    userId: '0',
    isDeleted: false,
    hasFollow: true,
    isChildComment: true,
    onClick: () => {},
    onDelete: () => {},
  },
};

export const DeletedComment: Story = {
  args: {
    type: 'comment',
    userId: '0',
    isDeleted: true,
    hasFollow: false,
    isChildComment: false,
    onClick: () => {},
    onDelete: () => {},
  },
};
