import type { Meta, StoryObj } from '@storybook/react';
import { WellHeader } from '@/features/Well';

const meta = {
  title: 'Well/WellDetail/WellHeader',
  component: WellHeader,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='relative flex h-[300px] w-full bg-gray-200'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WellHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { userId: '1', wellId: '', isRootUser: true, hasHomeButton: true },
};
