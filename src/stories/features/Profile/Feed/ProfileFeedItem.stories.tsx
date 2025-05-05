import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import ProfileFeedItem from '@/features/Profile/components/Feed/ProfileFeedItem';

const meta = {
  title: 'Profile/Feed/ProfileFeedItem',
  component: ProfileFeedItem,
  tags: ['autodocs'],
  parameters: {
    msw: {
      handlers: [
        http.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/`, () =>
          HttpResponse.json({})
        ),
      ],
    },
  },
  decorators: [
    (Story) => (
      <Suspense fallback={<div>Loading...</div>}>
        <Story />
      </Suspense>
    ),
  ],
} satisfies Meta<typeof ProfileFeedItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    feedData: {
      memoCount: 3,
      reviewCount: 3,
      bookInfo: {
        isbn: '9791193074657',
        category: 'unknown',
        page: 0,
        title: '세 눈 개구리 (바꿀 수 있어!, 2020 환경부 우수환경도서)',
        author: '올가 데 디오스',
        image:
          'https://shopping-phinf.pstatic.net/main_5292231/52922317605.20250211071513.jpg',
        publisher: '노란상상',
        pub_date: '2025-02-13',
        desc: '2020년 환경부 우수 환경도서\n\n〈몬스터 마을〉 시리즈 세 번째 이야기\n“세상을 바꾸기 위해 목소리 내 보는 거야!”\n지금까지 이렇게 크게 소리쳤던 개구리가 있었을까?\n\n‘작지만, 용감한!’\n‘우리와 같지만, 남다른!’\n아주 특별한 세 눈 개구리 한 마리가 세상을 바꾸다!\n\n“정말이지, 이런 개구리는 처음이야!”\n줄무늬 수영복을 꼭 입어야만 하는 세 눈 개구리!\n\n회색 구름이 하늘을 뒤덮고 있는 어느 마을이 있었습니다. 그 마을의 어느 연못 역시 하늘처럼 지저분한 색의 물이 흐르고 있었지요. 그 연못에는 작은 올챙이 한 마리가 열심히 헤엄치며, 개구리가 되어 가고 있었습니다. 바로 우리의 주인공, ‘아주 특별한 세 눈 개구리’였습니다. 이렇게 자라난 세 눈 개구리는 우리가 알고 있는 개구리와는 조금 달랐습니다. 예민한 피부를 갖고 있었기에, 그 더러운 물에 맨몸으로 헤엄칠 수가 없었습니다. 그래서 세 눈 개구리는 줄무늬 수영복을 꼭 입어야 했지요.',
        review_cnt: 1,
        avg_rating: 5,
        tags_pos: ['easy', 'squeeze_time', 'killing_time', 'smart'],
        tags_neg: ['wasting_time'],
      },
      bookId: '9791193074657',
      wellId: 'dJoQleX',
    },
  },
};
