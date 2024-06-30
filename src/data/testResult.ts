interface Quote {
  title: string;
  text: string;
}

interface TestResult {
  [key: number]: {
    title: string;
    subTitle: string;
    quote: Quote;
    type: {
      title: string;
      tag: string;
    };
    descriptions: { id: number; text: string }[];
  };
}

export const testResult: TestResult = {
  1: {
    title: '마음을 울리는\n감성 개구리',
    subTitle: '책 속에 감동을 찾는 나(๑˘ ᵕ˘๑)\n내 마음을 울리는 책이 좋아!',
    quote: {
      title: '어느 날, 레미드 구르몽이 말했다.',
      text: '“책은 어느 사람에게는 울타리가 되고,\n어느 사람에게는 사다리가 된다.”',
    },
    type: {
      title: '내 독서 성향은 감정형이에요',
      tag: '#감동적인 #힐링 #읽기쉬운 #에세이',
    },
    descriptions: [
      { id: 1, text: '감정과 이야기를 중심으로 책을 읽어요.' },
      { id: 2, text: '때론 위안을 받고자 책을 읽어요.' },
      { id: 3, text: '주로 에세이, 소설을 즐겨 읽는 경향이 있어요.' },
      { id: 4, text: '나의 감정을 따라가며 기록하는 행위가 좋아요.' },
      { id: 5, text: '가장 중요한 건 책을 읽으며 느끼는 감정!' },
    ],
  },
  2: {
    title: '호기심 가득한\n탐구 개구리',
    subTitle:
      '새로운 지식을 탐험하는 독서 Time ദ്ദി•̀.̫•́✧ \n책은 세상을 알아가는 통로!',
    quote: {
      title: '어느 날, 사르트르가 말했다.',
      text: '"내가 세계를 알게 된 것은\n책에 의해서였다."',
    },
    type: {
      title: '내 독서 성향은 사고형이에요',
      tag: '#전문적인 #논리적인 #스테디셀러',
    },
    descriptions: [
      { id: 1, text: '주로 궁금증을 해소하기 위해 책을 읽어요.' },
      { id: 2, text: '책의 논리와 전문성, 배경 등을 살펴요.' },
      { id: 3, text: '다양한 분야의 전문 서적을 좋아하는 경향이 있어요.' },
      { id: 4, text: '좋은 책을 찾으면 토론하고 싶어져요.' },
      { id: 5, text: '가장 중요한 건 책이 담고 있는 지식!' },
    ],
  },
  3: {
    title: '목표를 향한\n열정 개구리',
    subTitle: '책 읽는 ㉡ㅐ가 좋ㄷr,,★☆\n내 성장을 위해 독서는 꼭 필요한 일!',
    quote: {
      title: '어느 날, 빌 게이츠가 말했다.',
      text: '“내 성공의 중요한 부분은\n내가 독서에 시간을 할애했다는 것이다.”',
    },
    type: {
      title: '내 독서 성향은 성취형이에요',
      tag: '#베스트셀러 #실용적인 #지금뜨는',
    },
    descriptions: [
      { id: 1, text: '주로 문제 해결과 자기계발을 위해 책을 읽어요.' },
      { id: 2, text: '독서를 자랑스러운 취미로 여기고 있어요.' },
      {
        id: 3,
        text: '장르는 크게 가리지 않으며, 다양한 책을 읽는 경향이 있어요.',
      },
      { id: 4, text: '북클럽, 북콘서트 등에 관심이 많아요.' },
      { id: 5, text: '가장 중요한 건 책을 읽는 행위와 그로 인해 얻는 성취감!' },
    ],
  },
};
