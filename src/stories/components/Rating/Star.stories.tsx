import Star from '@/components/Rating/Star';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Rating/Star',
  component: Star,
  tags: ['autodocs'],
} satisfies Meta<typeof Star>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 0,
    size: undefined,
    color: undefined,
    defaultColor: undefined,
    onClick: undefined,
  },
};

export const Half: Story = {
  args: {
    rating: 0.5,
    size: undefined,
    color: undefined,
    defaultColor: undefined,
    onClick: undefined,
  },
};

export const Full: Story = {
  args: {
    rating: 1,
    size: undefined,
    color: undefined,
    defaultColor: undefined,
    onClick: undefined,
  },
};
