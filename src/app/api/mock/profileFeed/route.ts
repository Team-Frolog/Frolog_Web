import { NextResponse } from 'next/server';

export interface ProfileFeedRes {
  memoCount: number;
  reviewCount: number;
  bookInfo: {
    isbn: string;
    category: string;
    page: number;
    title: string;
    author: string;
    image: string;
    publisher: string;
    pub_date: string;
    desc: string;
    review_cnt: number;
    avg_rating: number;
    tags_pos: string[];
    tags_neg: string[];
  };
  bookId: string;
  wellId: string;
}

const res: ProfileFeedRes[] = [
  {
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
  {
    memoCount: 3,
    reviewCount: 3,
    bookInfo: {
      isbn: '9788924052671',
      category: 'unknown',
      page: 0,
      title: '빨 대',
      author: '정노엘',
      image:
        'https://shopping-phinf.pstatic.net/main_3381209/33812099776.20231115071937.jpg',
      publisher: '퍼플',
      pub_date: '2018-03-05',
      desc: '이 책은 정노엘이라는 어린이의 빨대를 구해줘라는 그림을 바탕으로 제작되었습니다.\n\n모두 함께 지내는 빨대들.\n친구들을 구하기 위해 나서는 빨대.\n\n힘을 합치면 할 수 있어!',
      review_cnt: 1,
      avg_rating: 4.5,
      tags_pos: ['easy', 'squeeze_time', 'healing'],
      tags_neg: ['wasting_time', 'no_evidence'],
    },
    bookId: '9788924052671',
    wellId: 'dJoQleX',
  },
  {
    memoCount: 3,
    reviewCount: 3,
    bookInfo: {
      isbn: '9791128804991',
      category: 'novel',
      page: 459,
      title: '9시 반의 당구',
      author: '하인리히 뵐',
      image:
        'https://shopping-phinf.pstatic.net/main_4616933/46169336632.20240305083821.jpg',
      publisher: '지식을만드는지식',
      pub_date: '2024-02-28',
      desc: '노벨문학상 수상 작가 하인리히 뵐의 대표작이다. 전후 독일 사회는 빠른 속도로 복구되어 갔지만, 부조리한 과거는 극복되지 않은 채 여전히 사회 곳곳에 침투해 있었다. 이 소설은 바로 이러한 현실에 대한 반성과 고찰을 담고 있다. 서로 단절된 채 살아가던 페멜 가족이 화해와 단합을 통해 연대감을 회복하고, 새로운 가족 공동체를 이루어 왜곡된 현실에 저항하며 버티어나가는 힘을 얻는 모습을 보여 준다.',
      review_cnt: 1,
      avg_rating: 3.5,
      tags_pos: ['easy', 'killing_time', 'smart'],
      tags_neg: ['biased', 'wasting_time', 'yawning'],
    },
    bookId: '9791128804991',
    wellId: 'dJoQleX',
  },
  {
    memoCount: 3,
    reviewCount: 3,
    bookInfo: {
      isbn: '9791198472700',
      category: 'unknown',
      page: 0,
      title: '메모 정리',
      author: '청림처사',
      image:
        'https://shopping-phinf.pstatic.net/main_4700634/47006347621.20240413070934.jpg',
      publisher: '에메랄드그린(emerald green)',
      pub_date: '2024-04-11',
      desc: '《메모 정리》 에는 지은이가 수십 년 동안 아무렇게나 낙서처럼 타이핑한 메모들을 정리하면서 자신이 어떻게 살아왔는지 돌아보고 또 다른 미래를 설계하는 과정이 들어있습니다. 이 책은 지은이가 자신에게 일어난 일들을 어떻게 받아들이고 반응하는지 보여줍니다. 그리고 그런 것들이 합쳐져 자신이 어떤 사람인지 알게 됩니다. 긴 세월 동안 쌓인 모순된 가치들 가운데 자신만의 줄기를 찾아가는 방법에 공감할 수 있습니다. 독자는 결국 책을 읽어 나가면서 삶의 의미와 본질에 대해 생각하게 됩니다.',
      review_cnt: 1,
      avg_rating: 4.5,
      tags_pos: ['easy', 'smart', 'healing'],
      tags_neg: ['wasting_time', 'no_evidence'],
    },
    bookId: '9791198472700',
    wellId: 'dJoQleX',
  },
];

export async function GET() {
  return NextResponse.json(res);
}
