import TapHeader from '@/components/Header/TapHeader';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Header/TapHeader',
  component: TapHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof TapHeader>;

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
