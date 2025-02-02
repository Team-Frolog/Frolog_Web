import Tab from '@/components/Tab/Tab';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Tab/Tab',
  component: Tab,
  tags: ['autodocs'],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { id: 1, label: '팔로잉', name: '팔로잉' },
      { id: 2, label: '팔로워', name: '팔로워' },
    ],
    currentTab: '팔로잉',
    defaultTab: '팔로잉',
    onChangeTab: () => {},
  },
};
