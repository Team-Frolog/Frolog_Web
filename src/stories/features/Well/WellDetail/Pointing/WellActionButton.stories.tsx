import type { Meta, StoryObj } from '@storybook/react';
import { WellActionButton } from '@/features/Well';

const meta = {
  title: 'Well/WellDetail/Pointing/WellActionButton',
  component: WellActionButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='relative flex h-[400px] w-[400px] items-center justify-center bg-gray-200'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WellActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Arrow: Story = {
  args: {
    iconType: 'arrow',
    wellId: undefined,
    href: undefined,
    isPointing: true,
    btnName: '로그인 하러가기',
    itemCount: 0,
  },
};

export const Plus: Story = {
  args: {
    iconType: 'arrow',
    wellId: undefined,
    href: undefined,
    isPointing: true,
    btnName: '책 추가하기',
    itemCount: 10,
  },
};
