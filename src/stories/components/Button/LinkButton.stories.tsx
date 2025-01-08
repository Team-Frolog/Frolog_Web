import LinkButton from '@/components/Button/LinkButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    route: '',
    children: <>버튼 텍스트</>,
    disabled: false,
    theme: 'normal',
    extraClass: undefined,
  },
};

export const Light: Story = {
  args: {
    route: '',
    children: <>버튼 텍스트</>,
    disabled: false,
    theme: 'light',
    extraClass: undefined,
  },
};

export const Gray: Story = {
  args: {
    route: '',
    children: <>버튼 텍스트</>,
    disabled: false,
    theme: 'gray',
    extraClass: undefined,
  },
};
