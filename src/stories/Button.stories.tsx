import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button/Button';

const meta = {
  title: 'Common/Button/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '공통 버튼 컴포넌트',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    type: 'button',
    disabled: false,
    theme: 'normal',
    children: <>기본 버튼</>,
  },
};

export const Error: Story = {
  args: {
    type: 'button',
    disabled: false,
    theme: 'error',
    children: <>에러 버튼</>,
  },
};

export const Gray: Story = {
  args: {
    type: 'button',
    disabled: false,
    theme: 'gray',
    children: <>비활성화 버튼</>,
  },
};

export const Light: Story = {
  args: {
    type: 'button',
    disabled: false,
    theme: 'light',
    children: <>라이트 버튼</>,
  },
};
