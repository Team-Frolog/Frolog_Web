import type { Meta, StoryObj } from '@storybook/react';
import SearchResultEmpty from '@/features/Search/components/SearchResultEmpty';

const meta = {
  title: 'Search/SearchResultEmpty',
  component: SearchResultEmpty,
  tags: ['autodocs'],
} satisfies Meta<typeof SearchResultEmpty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
