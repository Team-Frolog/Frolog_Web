import CheckButton from '@/components/Button/CheckButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/CheckButton',
  component: CheckButton,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '공통 체크박스 버튼',
  },
} satisfies Meta<typeof CheckButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    type: 'button',
    isChecked: true,
    theme: 'dark',
  },
};

export const Dark: Story = {
  args: {
    type: 'button',
    isChecked: false,
    theme: 'dark',
  },
};

export const Light: Story = {
  args: {
    type: 'button',
    isChecked: false,
    theme: 'light',
  },
};
