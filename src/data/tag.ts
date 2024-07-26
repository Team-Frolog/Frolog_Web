export interface TagData {
  id: string;
  value: string;
}

export const proTags: TagData[] = [
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
];

export const conTags: TagData[] = [
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
];
