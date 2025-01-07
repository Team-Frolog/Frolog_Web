import type { Meta, StoryObj } from '@storybook/react';
import WellListMessage from '@/features/Well/components/WellList/WellListMessage';

const meta = {
  title: 'Well/WellList/WellListMessage',
  component: WellListMessage,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='relative flex h-[100px] w-[390px]'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WellListMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: '우물을 플레이리스트처럼 만들어보세요.',
  },
};
