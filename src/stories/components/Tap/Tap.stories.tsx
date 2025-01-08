import Tap from '@/components/Tap/Tap';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Tap/Tap',
  component: Tap,
  tags: ['autodocs'],
} satisfies Meta<typeof Tap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    taps: [
      { id: 1, label: '팔로잉', name: '팔로잉' },
      { id: 2, label: '팔로워', name: '팔로워' },
    ],
    currentTap: '팔로잉',
    defaultTap: '팔로잉',
    onChangeTap: () => {},
  },
};
