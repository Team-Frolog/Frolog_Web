import TabHeader from '@/components/Header/TabHeader';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Header/TabHeader',
  component: TabHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof TabHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MemoTap: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/memo',
      },
    },
  },
  args: {},
};

export const ReviewTap: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/review',
      },
    },
  },
  args: {},
};
