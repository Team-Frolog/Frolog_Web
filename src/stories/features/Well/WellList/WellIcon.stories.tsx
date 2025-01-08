import { WellIcon } from '@/features/Well';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Well/WellList/WellIcon',
  component: WellIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof WellIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'list',
    wellData: {
      id: '1',
      name: '우물 이름',
      owner: '1',
      frog: 'default',
      color: 'travel',
      shape: 1,
      date: '2024-12-18T03:11:31.000Z',
      item_cnt: 1,
    },
    onClick: () => {},
  },
};
