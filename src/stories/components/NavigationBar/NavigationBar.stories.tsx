import NavigationBar from '@/components/NavigationBar/NavigationBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/NavigationBar',
  component: NavigationBar,
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
