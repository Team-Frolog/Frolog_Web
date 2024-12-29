import FrologItem from '@/components/FrologItem/FrologItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/FrologItem',
  component: FrologItem,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '상점 아이템 컴포넌트',
  },
  decorators: (Story) => (
    <div className='relative flex w-[128px] gap-[9px] overflow-hidden'>
      <Story />
    </div>
  ),
} satisfies Meta<typeof FrologItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoreItem: Story = {
  args: {
    type: 'store',
    isSelected: false,
    item: {
      key: 'default',
      type: 'frog',
      name: '개꾸리',
      price: 100,
      disabled: false,
      is_available: true,
      is_owned: false,
    },
    onClick: () => {},
  },
};

export const OwnedItem: Story = {
  args: {
    type: 'store',
    isSelected: false,
    item: {
      key: 'default',
      type: 'frog',
      name: '개꾸리',
      price: 100,
      disabled: false,
      is_available: true,
      is_owned: true,
    },
    onClick: () => {},
  },
};

export const WellFrogItem: Story = {
  args: {
    type: 'well',
    isSelected: false,
    item: {
      key: 'default',
      type: 'frog',
      name: '개꾸리',
      price: 100,
      disabled: false,
      is_available: true,
      is_owned: true,
    },
    onClick: () => {},
  },
};
