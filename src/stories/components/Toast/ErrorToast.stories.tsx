import ErrorToast from '@/components/Toast/ErrorToast';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Toast/ErrorToast',
  component: ErrorToast,
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorToast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    errorMsg: '에러 메시지',
  },
};
