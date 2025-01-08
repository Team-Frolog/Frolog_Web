import type { Meta, StoryObj } from '@storybook/react';
import { MemoDetail } from '@/features/Memo';

const meta = {
  title: 'Memo/MemoDetail',
  component: MemoDetail,
  tags: ['autodocs'],
} satisfies Meta<typeof MemoDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    memoData: {
      id: '0',
      writer: '0',
      isbn: '0',
      content: '내용',
      is_public: false,
      images: [],
      date: '2024-12-18T03:11:31.000Z',
      edit: '2024-12-18T03:11:31.000Z',
    },
  },
};

export const WithImage: Story = {
  args: {
    memoData: {
      id: '0',
      writer: '0',
      isbn: '0',
      content: '내용',
      is_public: false,
      images: ['1', '2'],
      date: '2024-12-18T03:11:31.000Z',
      edit: '2024-12-18T03:11:31.000Z',
    },
  },
};
