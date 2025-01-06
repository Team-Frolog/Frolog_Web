import type { Meta, StoryObj } from '@storybook/react';
import WellItem from '@/features/Well/components/Well/WellItem/WellItem';

const meta = {
  title: 'Well/WellItem/WellItem',
  component: WellItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='flex h-[150px] w-full flex-col-reverse bg-gray-200'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WellItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Reading: Story = {
  args: {
    wellBook: {
      id: '',
      status: 'reading',
      isbn: '9788936434120',
      title: '도서명',
      page: 300,
      category: 'it',
      review_cnt: 0,
      memo_cnt: 0,
      date: '2024-12-18T03:11:31.000Z',
    },
    wellId: '',
    isTopItem: false,
    isLastItem: false,
    zIndex: 0,
    startLoading: () => {},
    setTarget: () => {},
  },
};

export const HasReview: Story = {
  args: {
    wellBook: {
      id: '',
      status: 'done',
      isbn: '9788936434120',
      title: '도서명',
      page: 300,
      category: 'it',
      review_cnt: 1,
      memo_cnt: 0,
      date: '2024-12-18T03:11:31.000Z',
    },
    wellId: '',
    isTopItem: false,
    isLastItem: false,
    zIndex: 0,
    startLoading: () => {},
    setTarget: () => {},
  },
};

export const HasMemo: Story = {
  args: {
    wellBook: {
      id: '',
      status: 'reading',
      isbn: '9788936434120',
      title: '도서명',
      page: 300,
      category: 'it',
      review_cnt: 0,
      memo_cnt: 2,
      date: '2024-12-18T03:11:31.000Z',
    },
    wellId: '',
    isTopItem: false,
    isLastItem: false,
    zIndex: 0,
    startLoading: () => {},
    setTarget: () => {},
  },
};

export const HasAll: Story = {
  args: {
    wellBook: {
      id: '',
      status: 'done',
      isbn: '9788936434120',
      title: '도서명',
      page: 300,
      category: 'it',
      review_cnt: 1,
      memo_cnt: 1,
      date: '2024-12-18T03:11:31.000Z',
    },
    wellId: '',
    isTopItem: false,
    isLastItem: false,
    zIndex: 0,
    startLoading: () => {},
    setTarget: () => {},
  },
};
