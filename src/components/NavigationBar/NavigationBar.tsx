'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { FeedIcon, ProfileIcon, SearchIcon, WellIcon } from 'public/icons';
import { PAGES } from '@/constants/page';
import useUserActionStore from '@/store/userActionStore';
import { useUserId } from '@/store/sessionStore';
import NavItem from './NavItem';

function NavigationBar() {
  const userId = useUserId();
  const pathname = usePathname();
  const { setScrollPos } = useUserActionStore((state) => state.actions);

  return (
    <div
      id='navBar'
      className='z-50 flex w-full shrink-0 items-center justify-around border-t border-gray-300 bg-white px-[20px] pb-[24px] pt-[10px]'
    >
      <NavItem
        label='well'
        href={PAGES.HOME}
        isActive={
          pathname === PAGES.HOME ||
          pathname === PAGES.DEFAULT ||
          pathname.includes(PAGES.WELL)
        }
        icon={
          <WellIcon
            fill={
              pathname === PAGES.HOME ||
              pathname === PAGES.DEFAULT ||
              pathname.includes(PAGES.WELL)
                ? '#313239'
                : '#B3B6C5'
            }
            height={22}
          />
        }
      />
      <NavItem
        label='feed'
        href={PAGES.FEED}
        isActive={pathname === PAGES.FEED}
        onClick={() => setScrollPos(null)}
        icon={
          <FeedIcon
            fill={pathname === PAGES.FEED ? '#313239' : '#B3B6C5'}
            height={22}
          />
        }
      />

      <NavItem
        label='search'
        href={PAGES.SEARCH_HOME}
        isActive={pathname === PAGES.SEARCH_HOME}
        icon={
          <SearchIcon
            fill={pathname === PAGES.SEARCH_HOME ? '#313239' : '#B3B6C5'}
          />
        }
      />
      <NavItem
        label='profile'
        href={`/${userId}/profile`}
        isActive={pathname.includes(PAGES.PROFILE)}
        icon={
          <ProfileIcon
            fill={pathname.includes(PAGES.PROFILE) ? '#313239' : '#B3B6C5'}
          />
        }
      />
    </div>
  );
}

export default NavigationBar;
