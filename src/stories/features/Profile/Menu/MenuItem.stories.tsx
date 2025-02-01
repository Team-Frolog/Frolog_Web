import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from '@/features/Profile/components/Menu/MenuItem';

const meta = {
  title: 'Profile/Menu/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '공지사항',
    href: undefined,
    theme: 'default',
    onClick: () => {},
  },
};

export const Highlight: Story = {
  args: {
    name: '공지사항',
    href: undefined,
    theme: 'highlight',
    onClick: () => {},
  },
};
