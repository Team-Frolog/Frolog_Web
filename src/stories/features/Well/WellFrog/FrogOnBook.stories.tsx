import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FrogOnBook } from '@/features/Well';

const meta = {
  title: 'Well/WellFrog/FrogOnBook',
  component: FrogOnBook,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='bg-gray-200'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FrogOnBook>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    frogId: 'default',
    message: '메세지',
    zIndex: 0,
  },
};
