export interface Question {
  number: string;
  question: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  value: string;
}

export const weight = {
  1: 3,
  2: 3,
  3: 2,
  4: 2,
  5: 2,
  6: 1,
  7: 1,
};

export const questions: Question[] = [
  {
    number: 'Q1.',
    question: '책을 읽는 가장 큰 이유는\n무엇인가요?',
    answers: [
      { id: 3, value: '📈 더 나은 나를 만들 수 있는 성장의 도구야' },
      { id: 1, value: '😌 힘든 하루의 끝, 책 속에서 위로를 받아!' },
      { id: 2, value: '🔭 새로운 세상과 지식을 탐험하는 게 즐거워' },
    ],
  },
  {
    number: 'Q2.',
    question: '책을 읽는 동안 가장 많이 하는\n생각은 무엇인가요?',
    answers: [
      { id: 2, value: '🤔 이 책에서 무엇을 알 수 있을까?' },
      { id: 1, value: '🫢 이야기의 감정선에 빠져들게 돼..' },
      {
        id: 3,
        value: '🧐 이 책을 통해 내가 얼마나 더 발전할 수 있을까?',
      },
    ],
  },
  {
    number: 'Q3.',
    question: '책을 읽는 동안\n주로 어떤 습관이 있나요?',
    answers: [
      { id: 1, value: '🥹 감동적인 부분을 반복해서 읽어요' },
      { id: 2, value: '📝 중요한 부분을 표시하고 메모를 해요!' },
      { id: 3, value: '📖 실천할 수 있는 걸 리스트로 적어놔요!' },
    ],
  },
  {
    number: 'Q4.',
    question: '서점에서 고른 책! 처음 관심을\n가졌던 이유는 무엇인가요?',
    answers: [
      { id: 1, value: '📚 첫눈에 반한 디자인과 제목!' },
      { id: 3, value: '🥸 목차를 보니 얻을 게 많겠군!' },
      { id: 2, value: '🫢 좋아하는 작가의 신간이니 읽어봐야지!' },
    ],
  },
  {
    number: 'Q5.',
    question: '책을 다 읽고 나서 가장 먼저 하는\n행동은 무엇인가요?',
    answers: [
      { id: 2, value: '🗂️ 책의 내용을 다시 분석하고 정리합니다!' },
      { id: 3, value: '📆 책에서 실천할 수 있는 걸 루틴으로 만들어요' },
      { id: 1, value: '📝 책에서 얻은 감동을 글로 남겨놔요' },
    ],
  },
  {
    number: 'Q6.',
    question: '친구에게 책을 추천할 때\n주로 어떤 방식을 사용하나요?',
    answers: [
      {
        id: 3,
        value: '💸 이 책이 얼마나 인생에 도움이 되는지 설명해줘요',
      },
      { id: 1, value: '💬 이 책의 감동적인 부분을 이야기해줘요' },
      { id: 2, value: '📑 이 책에서 얻을 수 있는 지식을 강조해요' },
    ],
  },
  {
    number: 'Q7.',
    question: '책을 읽기 가장 좋은 환경은\n어떤가요?',
    answers: [
      { id: 1, value: '😊 따뜻하고 아늑한 공간에서 편안하게 읽어요' },
      {
        id: 3,
        value: '😮 영감을 주는 공간에서 동기부여를 받으며 읽어요',
      },
      { id: 2, value: '🤫 조용하고 집중할 수 있는 환경에서 읽어요' },
    ],
  },
];
