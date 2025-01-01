import Tag from '@/components/Tag/Tag';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Tag/Tag',
  component: Tag,
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    tagValue: '완독하기 쉬운',
    size: 'small',
    type: 'pros',
    onClick: () => {},
    isSelected: false,
  },
};

export const Big: Story = {
  args: {
    tagValue: '완독하기 쉬운',
    size: 'big',
    type: 'pros',
    onClick: () => {},
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    tagValue: '완독하기 쉬운',
    size: 'small',
    type: 'pros',
    onClick: () => {},
    isSelected: true,
  },
};
