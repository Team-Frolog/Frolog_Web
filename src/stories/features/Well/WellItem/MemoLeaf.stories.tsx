import type { Meta, StoryObj } from '@storybook/react';
import MemoLeaf from '@/features/Well/components/Well/WellItem/MemoLeaf';

const meta = {
  title: 'Well/WellItem/MemoLeaf',
  component: MemoLeaf,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='flex h-[100px] w-[100px]'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MemoLeaf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bg: '#FF8BCA',
    line: '#AE4039',
  },
};
