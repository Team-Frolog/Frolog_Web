import TagSlider from '@/components/Tag/TagSlider';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Tag/TagSlider',
  component: TagSlider,
  tags: ['autodocs'],
} satisfies Meta<typeof TagSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'pros',
    tagKeys: ['easy', 'smart', 'fresh', 'various', 'warm'],
  },
};
