import BackButton from '@/components/Button/BackButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/BackButton',
  component: BackButton,
  tags: ['autodocs'],
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    type: 'normal',
    extraClass: undefined,
    fill: undefined,
    onClick: undefined,
  },
};

export const Theme: Story = {
  args: {
    type: 'green',
    extraClass: undefined,
    fill: undefined,
    onClick: undefined,
  },
};
