import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MemoListItem from '@/features/Memo/components/MemoList/MemoListItem';

const meta = {
  title: 'Memo/MemoListItem',
  component: MemoListItem,
  tags: ['autodocs'],
} satisfies Meta<typeof MemoListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userId: '',
    setMemoId: () => {},
    onDelete: () => {},
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
    userId: '',
    setMemoId: () => {},
    onDelete: () => {},
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
