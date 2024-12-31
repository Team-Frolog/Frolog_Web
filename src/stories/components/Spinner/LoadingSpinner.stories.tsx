import LoadingSpinner from '@/components/Spinner/LoadingSpinner';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Spinner/LoadingSpinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    theme: 'dark',
  },
};

export const Light: Story = {
  args: {
    theme: 'light',
  },
};

export const Transparent: Story = {
  args: {
    theme: 'transparent',
  },
};
