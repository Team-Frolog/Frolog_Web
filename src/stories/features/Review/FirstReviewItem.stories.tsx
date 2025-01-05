import type { Meta, StoryObj } from '@storybook/react';
import FirstReviewItem from '@/features/Review/components/ReviewList/FirstReviewItem';

const meta = {
  title: 'Review/FirstReviewItem',
  component: FirstReviewItem,
  tags: ['autodocs'],
} satisfies Meta<typeof FirstReviewItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
