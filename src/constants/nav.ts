import { NavItemKey, NavItemLabel } from '@/types/nav';

interface NavItem {
  key: NavItemKey;
  label: NavItemLabel;
  name: string;
}

export const NAV_ITEM: Record<NavItemLabel, NavItem> = {
  well: {
    key: 'a3q11',
    label: 'well',
    name: '우물',
  },
  feed: {
    key: 'yd3ts',
    label: 'feed',
    name: '피드',
  },
  search: {
    key: '22h5f',
    label: 'search',
    name: '책검색',
  },
  profile: {
    key: 'iqqlo',
    label: 'profile',
    name: '프로필',
  },
} as const;
