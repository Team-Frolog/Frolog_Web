export interface Well {
  id: string;
  welltype: number;
  title: string;
  category: string;
}

export const wellList: Well[] = [
  { id: 'well1', welltype: 1, title: '시간 순삭 소설 우물', category: 'novel' },
  {
    id: 'well2',
    welltype: 2,
    title: '퇴근길에 읽기 좋은 책',
    category: 'novel',
  },
  {
    id: 'well3',
    welltype: 3,
    title: '출근길에 읽기 좋은 책',
    category: 'novel',
  },
  { id: 'well4', welltype: 4, title: '소중한 나의 첫 우물', category: 'it' },
  {
    id: 'well5',
    welltype: 5,
    title: '시간 순삭 소설 우물',
    category: 'travel',
  },
  {
    id: 'well6',
    welltype: 6,
    title: '퇴근길에 읽기 좋은 책',
    category: 'novel',
  },
];
