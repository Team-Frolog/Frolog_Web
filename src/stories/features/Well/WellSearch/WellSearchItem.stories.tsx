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
  args: {},
};
