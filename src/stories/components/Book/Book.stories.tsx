import Book from '@/components/Book/Book';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Book',
  component: Book,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '공통 도서 컴포넌트',
  },
  decorators: (Story) => (
    <div className='w-[155.81px]'>
      <Story />
    </div>
  ),
} satisfies Meta<typeof Book>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: undefined,
    canClick: false,
  },
};
