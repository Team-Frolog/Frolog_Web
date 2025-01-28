export const taps: Record<Taps, string> = {
  well: '우물',
  feed: '피드',
  search: '책검색',
  profile: '프로필',
} as const;

export enum NavigationTap {
  WELL = 'well',
  FEED = 'feed',
  SEARCH = 'search',
  PROFILE = 'profile',
}
