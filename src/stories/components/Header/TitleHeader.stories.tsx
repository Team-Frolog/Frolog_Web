import TitleHeader from '@/components/Header/TitleHeader';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Header/TitleHeader',
  component: TitleHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof TitleHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default',
    title: '타이틀',
    hasButton: false,
    isDisabled: false,
    theme: 'dark',
    onClick: () => {},
    onClickBack: () => {},
  },
};

export const Edit: Story = {
  args: {
    type: 'edit',
    title: '타이틀',
    hasButton: true,
    isDisabled: false,
    theme: 'dark',
    onClick: () => {},
    onClickBack: () => {},
  },
};

export const Write: Story = {
  args: {
    type: 'write',
    title: '타이틀',
    hasButton: true,
    isDisabled: false,
    theme: 'dark',
    onClick: () => {},
    onClickBack: () => {},
  },
};

export const NoBorder: Story = {
  args: {
    type: 'no_border',
    title: '타이틀',
    hasButton: false,
    isDisabled: false,
    theme: 'dark',
    onClick: () => {},
    onClickBack: () => {},
  },
};
