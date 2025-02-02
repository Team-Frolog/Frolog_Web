export interface GroupTab {
  path: string;
  label: string;
}

export const memoReviewTabs: GroupTab[] = [
  { path: '/memo', label: '메모' },
  { path: '/review', label: '리뷰' },
];

export const wellTabs: GroupTab[] = [
  { path: '/', label: '내우물' },
  { path: '/others', label: '탐색' },
];
