import type { Meta, StoryObj } from '@storybook/react';
import { WellTitle } from '@/features/Well';

const meta = {
  title: 'Well/WellDetail/WellTitle',
  component: WellTitle,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-[450px] bg-gray-200'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WellTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '소중한 내 첫 우물',
    wellId: '',
    itemCount: 10,
    isPointing: true,
    isRootUser: true,
  },
};
