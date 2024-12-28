import DeleteButton from '@/components/Button/DeleteButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/DeleteButton',
  component: DeleteButton,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '삭제 버튼',
  },
} satisfies Meta<typeof DeleteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonText: '버튼 텍스트',
    type: 'review',
    onDelete: () => {},
    onClick: undefined,
  },
};
