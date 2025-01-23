import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '@/features/Profile';

const meta = {
  title: 'Profile/Menu/Menu',
  component: Menu,
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
