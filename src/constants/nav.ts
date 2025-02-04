import { Taps } from '@/types/taps';

export const navItem: Record<Taps, string> = {
  well: '우물',
  feed: '피드',
  search: '책검색',
  profile: '프로필',
} as const;

export enum NavItemLabel {
  WELL = 'well',
  FEED = 'feed',
  SEARCH = 'search',
  PROFILE = 'profile',
}

export enum NavItemKey {
  WELL = 'a3q11',
  FEED = 'yd3ts',
  SEARCH = '22h5f',
  PROFILE = 'iqqlo',
}
