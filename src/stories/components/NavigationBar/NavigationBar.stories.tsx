import NavigationBar from '@/components/NavigationBar/NavigationBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/NavigationBar',
  component: NavigationBar,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '네비게이션 바',
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
