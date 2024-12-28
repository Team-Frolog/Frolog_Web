import AddButton from '@/components/Button/AddButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/AddButton',
  component: AddButton,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'AddIcon 버튼',
  },
} satisfies Meta<typeof AddButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    text: '버튼',
    route: undefined,
    categoryId: undefined,
    onClick: undefined,
  },
};

export const Theme: Story = {
  args: {
    text: '카테고리 테마 버튼',
    route: undefined,
    categoryId: 'it',
    onClick: undefined,
  },
};
