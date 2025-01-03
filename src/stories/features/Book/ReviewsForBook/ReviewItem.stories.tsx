import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import ReviewItem from '@/features/Book/components/ReviewsForBook/ReviewItem';

const meta = {
  title: 'Book/ReviewsForBook/ReviewItem',
  component: ReviewItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Suspense fallback={<div>Loading...</div>}>
        <Story />
      </Suspense>
    ),
  ],
} satisfies Meta<typeof ReviewItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    reviewData: {
      id: 'pv4DQvV',
      writer: 'RXgYmgQ',
      isbn: '9788936434120',
      variant: 0,
      title: '깊게 스며 깎아도 깎아도 도려내어 지지 않는 ',
      content:
        '무관심 하려던 현실이기에 단순 소설이라 치부하며 그나마 가벼이 여기려던 내 속마음은 결국 마지막 에필로그에서 짓이겨졌다. 가까이서 겪은 이가 무덤덤하기에 더 아픈 마음.',
      rating: 4,
      tags_pos: ['killing_time'],
      tags_neg: ['biased'],
      date: '2024-12-18T03:11:31.000Z',
      edit: '2024-12-18T03:11:31.000Z',
      like: false,
      like_count: 1,
      comment_count: 0,
    },
    category: 'novel',
    onClickLike: () => {},
  },
};
