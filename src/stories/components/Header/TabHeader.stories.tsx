import TabHeader from '@/components/Header/TabHeader';
import { MEMO_REVIEW_TABS } from '@/constants/tabs';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Header/TabHeader',
  component: TabHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof TabHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MemoTab: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/memo',
      },
    },
  },
  args: {
    isResponsive: true,
    tabs: MEMO_REVIEW_TABS,
  },
};

export const ReviewTab: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/review',
      },
    },
  },
  args: {
    isResponsive: true,
    tabs: MEMO_REVIEW_TABS,
  },
};
