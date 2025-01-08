import MajorTagList from '@/components/Tag/MajorTagList';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Tag/MajorTagList',
  component: MajorTagList,
  tags: ['autodocs'],
} satisfies Meta<typeof MajorTagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pros: Story = {
  args: {
    type: 'pros',
    tagKeys: ['easy', 'smart'],
  },
};

export const Cons: Story = {
  args: {
    type: 'cons',
    tagKeys: ['shallow', 'issuing'],
  },
};
