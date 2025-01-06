import type { Meta, StoryObj } from '@storybook/react';
import Pointing from '@/features/Well/components/Well/Pointing/Pointing';

const meta = {
  title: 'Well/Pointing/Pointing',
  component: Pointing,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='relative h-[350px] w-[350px] bg-gray-200'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Pointing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
