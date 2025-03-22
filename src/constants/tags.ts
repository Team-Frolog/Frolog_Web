export interface TagData {
  id: string;
  value: string;
}

export const PROS_TAG: TagData[] = [
  { id: 'easy', value: '완독하기 쉬운' },
  { id: 'squeeze_time', value: '틈틈이 읽기 좋은' },
  { id: 'killing_time', value: '시간 순삭' },
  { id: 'smart', value: '똑똑해지는' },
  { id: 'healing', value: '힐링되는' },
  { id: 'organized', value: '기승전결이 완벽한' },
  { id: 'fresh', value: '관점이 신선한' },
  { id: 'motivational', value: '동기부여 뿜뿜' },
  { id: 'killing_stress', value: '스트레스가 싹' },
  { id: 'tears', value: '눈물이 핑 도는' },
  { id: 'warm', value: '마음이 따듯해지는' },
  { id: 'small_talk', value: '대화 소재로 딱' },
  { id: 'various', value: '해석이 무궁무진' },
] as const;

export const CONS_TAG: TagData[] = [
  { id: 'biased', value: '민초급 호불호' },
  { id: 'wasting_time', value: '남는 게 없는' },
  { id: 'yawning', value: '하품이 나오는' },
  { id: 'no_evidence', value: '근거가 부족한' },
  { id: 'shallow', value: '넓고 얕은' },
  { id: 'cliche', value: '진부한' },
  { id: 'cant_relate', value: '공감이 어려운' },
  { id: 'background', value: '배경지식이 필요한' },
  { id: 'outdated', value: '시대에 뒤떨어지는' },
  { id: 'disarrayed', value: '내용이 뒤죽박죽' },
  { id: 'issuing', value: '논란이 될 만한' },
  { id: 'hard_terms', value: '전문용어 폭탄' },
  { id: 'mistranslated', value: '번역이 어색한' },
] as const;

export const REASON_TAG: TagData[] = [
  { id: '1', value: '자기계발을 위해' },
  { id: '2', value: '새로운 동기부여' },
  { id: '3', value: '위로와 힐링이 필요' },
  { id: '4', value: '누가 추천해줘서' },
  { id: '5', value: 'SNS에서 화제' },
  { id: '6', value: '베스트셀러' },
  { id: '7', value: '일/공부에 도움' },
  { id: '8', value: '재테크/경제 공부를 위해' },
  { id: '9', value: '제목이 끌려서' },
  { id: '10', value: '표지가 예뻐서' },
  { id: '11', value: '서점에서 우연히 발견' },
  { id: '12', value: '도서관에서 빌림' },
];
