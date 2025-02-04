import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from '@/features/Search';

const meta = {
  title: 'Search/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '책 제목 또는 저자를 검색해 보세요',
    route: undefined,
  },
};
