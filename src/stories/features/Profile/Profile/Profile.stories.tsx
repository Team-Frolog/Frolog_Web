import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Profile } from '@/features/Profile';

const meta = {
  title: 'Profile/Profile/Profile',
  component: Profile,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Suspense fallback={<div>Loading...</div>}>
        <Story />
      </Suspense>
    ),
  ],
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userId: '0',
    isRootUser: false,
  },
};

export const RootUser: Story = {
  args: {
    userId: '0',
    isRootUser: true,
  },
};

export const OffVisibility: Story = {
  args: {
    userId: '1',
    isRootUser: false,
  },
};
