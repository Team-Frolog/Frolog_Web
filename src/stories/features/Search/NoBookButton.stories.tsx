import type { Meta, StoryObj } from '@storybook/react';
import NoBookButton from '@/features/Search/components/NoBookButton';

const meta = {
  title: 'Search/NoBookButton',
  component: NoBookButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='ml-[50px] h-[150px] w-[100px]'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NoBookButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => {},
  },
};
