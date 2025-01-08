import type { Meta, StoryObj } from '@storybook/react';
import StateSelectSheet from '@/features/Book/components/BottomSheet/StateSelectSheet';

const meta = {
  title: 'Common/BottomSheet/StateSelectSheet',
  component: StateSelectSheet,
  tags: ['autodocs'],
} satisfies Meta<typeof StateSelectSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    reviewCount: 1,
    handleAddReadBook: () => {},
    handleAddReadingBook: () => {},
  },
};
