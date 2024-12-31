import WellEntryHeader from '@/components/Header/WellEntryHeader';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Header/WellEntryHeader',
  component: WellEntryHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof WellEntryHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '피드',
    bgColor: undefined,
    hasBackButton: false,
  },
};

export const Profile: Story = {
  args: {
    title: '프로필',
    bgColor: undefined,
    hasBackButton: true,
  },
};
