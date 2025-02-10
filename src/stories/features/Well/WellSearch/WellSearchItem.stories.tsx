import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import WellSearchItem from '@/features/Well/components/WellSearch/WellSearchItem';

const meta = {
  title: 'Well/WellSearch/WellSearchItem',
  component: WellSearchItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Suspense fallback={<div>Loading...</div>}>
        <Story />
      </Suspense>
    ),
  ],
} satisfies Meta<typeof WellSearchItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userId: 'jeLY5v4',
    wells: [
      {
        id: 'zg1GyvV',
        name: '첫우물',
        owner: 'jeLY5v4',
        frog: 'default',
        color: 'religion',
        shape: 1,
        date: '2025-02-09T10:10:08.000Z',
        item_cnt: 0,
      },
    ],
  },
};
