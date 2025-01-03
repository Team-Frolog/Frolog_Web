import type { Meta, StoryObj } from '@storybook/react';
import NoReviewForBook from '@/features/Book/components/ReviewsForBook/NoReviewForBook';

const meta = {
  title: 'Book/ReviewsForBook/NoReviewForBook',
  component: NoReviewForBook,
  tags: ['autodocs'],
} satisfies Meta<typeof NoReviewForBook>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
