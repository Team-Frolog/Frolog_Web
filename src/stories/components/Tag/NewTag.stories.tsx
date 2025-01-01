import NewTag from '@/components/Tag/NewTag';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Tag/NewTag',
  component: NewTag,
  tags: ['autodocs'],
} satisfies Meta<typeof NewTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: 'top-0 left-0',
  },
};
