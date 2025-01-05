import { MemoBubble, MemoLight, MemoPin } from 'public/icons';

export type MemoType = 'phrase' | 'thought' | 'question';

/** deprecated */
export const memoTag = {
  phrase: {
    icon: <MemoPin />,
    label: '기억할 문장',
  },
  thought: { icon: <MemoBubble />, label: '내 생각' },
  question: { icon: <MemoLight />, label: '떠오르는 질문' },
};
