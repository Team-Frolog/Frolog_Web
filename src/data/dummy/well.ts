export interface Well {
  id: string;
  title: string;
  category: string;
}

export const wellList: Well[] = [
  { id: 'well1', title: '시간 순삭 소설 우물', category: 'novel' },
  { id: 'well2', title: '퇴근길에 읽기 좋은 책', category: 'novel' },
  { id: 'well3', title: '출근길에 읽기 좋은 책', category: 'novel' },
  { id: 'well4', title: '소중한 나의 첫 우물', category: 'it' },
  { id: 'well5', title: '시간 순삭 소설 우물', category: 'travel' },
  { id: 'well6', title: '퇴근길에 읽기 좋은 책', category: 'novel' },
];
