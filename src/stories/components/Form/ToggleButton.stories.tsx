import ToggleButton from '@/components/Form/Button/ToggleButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Form/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    handleChange: () => {},
    isPublic: false,
    theme: 'light',
  },
};

export const Dark: Story = {
  args: {
    handleChange: () => {},
    isPublic: false,
    theme: 'dark',
  },
};

export const Toggled: Story = {
  args: {
    handleChange: () => {},
    isPublic: true,
    theme: 'dark',
  },
};
