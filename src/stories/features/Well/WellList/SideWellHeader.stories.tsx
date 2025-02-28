import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SideWellHeader } from '@/features/Well';

const meta = {
  title: 'Well/WellList/SideWellHeader',
  component: SideWellHeader,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Suspense fallback={<div>Loading...</div>}>
        <div className='relative w-[450px]'>
          <Story />
        </div>
      </Suspense>
    ),
  ],
} satisfies Meta<typeof SideWellHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hasBackButton: false,
    hasStoreButton: true,
    bgColor: 'bg-gray-200',
  },
};

export const Others: Story = {
  args: {
    hasBackButton: true,
    hasStoreButton: false,
    bgColor: 'bg-gray-200',
  },
};
