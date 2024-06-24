interface Quote {
  [key: number]: {
    id: number;
    title: string;
    text: string;
  }[];
}

export const quotes: Quote = {
  1: [
    {
      id: 1,
      title: '어느 날, 알랭 드 보통이 말했다',
      text: '책을 읽을 때마다 마음 속 깊은 곳에서\n무언가가 깨어나는 듯한 느낌이 든다.',
    },
    {
      id: 2,
      title: '문학의 거장, 무라카미 하루키는 이렇게 말했다',
      text: '진정한 감동은 마음 깊이 새겨지고,\n그 여운은 오래도록 남는다.',
    },
    {
      id: 3,
      title: '따뜻한 진심을 전하는 앤 라모트는 말했다',
      text: '사람의 마음을 움직이는 건거창한\n말이 아니라, 작은 진심이다.',
    },
  ],
  2: [
    {
      id: 1,
      title: '어느 날, 코피 아난이 말했다',
      text: '지식은 힘이다. 정보는 해방이다.\n교육은 진보의 전제 조건이다.',
    },
    {
      id: 2,
      title: '별을 사랑한 과학자, 칼 세이건은 이렇게 말했다',
      text: '우리는 읽을 때마다\n세상을 새롭게 탐험하는 것이다.',
    },
    {
      id: 3,
      title: '항해의 지혜를 담은 조지프 콘래드는 말했다',
      text: '지식은 무한한 바다와 같아서,\n우리는 그 바다를 항해하는 항해사다.',
    },
  ],
  3: [
    {
      id: 1,
      title: '성공의 비밀을 아는 나폴레온 힐은 이렇게 말했다',
      text: '성공은 행동을 요구하며,\n책은 그 행동의 지침서가 된다.',
    },
    {
      id: 2,
      title: '자기계발의 대가, 브라이언 트레이시는 말했다',
      text: '목표를 세우고 달성하는 과정에서\n우리는 진정한 자신을 발견한다.',
    },
    {
      id: 3,
      title: '미래를 비추는 토니 로빈스는 말했다',
      text: '책은 우리가 꿈꾸는 미래로\n가는 길을 비추는 등불이다.',
    },
  ],
};

const getQuote = (num: number) => {
  const quoteList = quotes[num];
  const randomIndex = Math.floor(Math.random() * quoteList.length);
  return quoteList[randomIndex];
};

export const testResult = {
  1: {
    title: '마음을 울리는\n감성 개구리',
    subTitle: '책 속에 감동을 찾는 나(๑˘ ᵕ˘๑)\n내 마음을 울리는 책이 좋아!',
    quote: getQuote(1),
    type: {
      title: '당신의 독서 성향은 감정형입니다',
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
    quote: getQuote(2),
    type: {
      title: '당신의 독서 성향은 사고형입니다',
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
    quote: getQuote(3),
    type: {
      title: '당신의 독서 성향은 성취형입니다',
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
