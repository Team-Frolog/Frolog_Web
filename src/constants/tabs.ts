import { PAGES } from './page';

export interface GroupTab {
  path: string;
  label: string;
}

export const MEMO_REVIEW_TABS: GroupTab[] = [
  { path: '/memo', label: '메모' },
  { path: '/review', label: '리뷰' },
] as const;

export const WELL_TABS: GroupTab[] = [
  { path: PAGES.HOME, label: '내우물' },
  { path: PAGES.EXPLORE, label: '탐색' },
];

export const STORE_TABS: GroupTab[] = [
  { path: PAGES.STORE, label: '상점' },
  { path: PAGES.MISSION, label: '미션' },
];
