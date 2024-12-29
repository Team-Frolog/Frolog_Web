import ButtonWithText from '@/components/Button/ButtonWithText';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/ButtonWithText',
  component: ButtonWithText,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonWithText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    btnText: '버튼 텍스트',
    btnType: 'button',
    children: <>추가 텍스트</>,
    disabled: false,
    onClick: undefined,
  },
};
