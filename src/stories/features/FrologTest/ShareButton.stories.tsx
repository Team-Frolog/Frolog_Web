import type { Meta, StoryObj } from '@storybook/react';
import ShareButton from '@/features/FrologTest/components/Button/ShareButton';

const meta = {
  title: 'FrologTest/ShareButton',
  component: ShareButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ShareButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
