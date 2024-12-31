import Rating from '@/components/Rating/Rating';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Rating/Rating',
  component: Rating,
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 4.5,
    hasComment: false,
    categoryId: undefined,
    textClass: undefined,
  },
};

export const WithComment: Story = {
  args: {
    rating: 4.5,
    hasComment: true,
    categoryId: undefined,
    textClass: undefined,
  },
};
