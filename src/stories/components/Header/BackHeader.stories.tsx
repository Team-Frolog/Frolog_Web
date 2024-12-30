import BackHeader from '@/components/Header/BackHeader';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Header/BackHeader',
  component: BackHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof BackHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
