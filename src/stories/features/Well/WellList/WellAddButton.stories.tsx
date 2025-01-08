import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import WellAddButton from '@/features/Well/components/WellList/WellAddButton';

const meta = {
  title: 'Well/WellList/WellAddButton',
  component: WellAddButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Suspense fallback={<div>Loading...</div>}>
        <Story />
      </Suspense>
    ),
  ],
} satisfies Meta<typeof WellAddButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userId: '0',
  },
};
