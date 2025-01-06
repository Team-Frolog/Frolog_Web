import type { Meta, StoryObj } from '@storybook/react';
import GuideChat from '@/features/Well/components/Well/WellFrog/GuideChat';

const meta = {
  title: 'Well/WellDetail/WellFrog/GuideChat',
  component: GuideChat,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='flex h-[200px] w-[300px] items-center justify-center bg-gray-200'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof GuideChat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: '메세지',
    marginBottom: 0,
  },
};
