'use client';

import React from 'react';
import { FeedIcon, ProfileIcon, SearchIcon, WellIcon } from 'public/icons';
import { PAGES } from '@/constants/page';

import useUserActionStore, { useCurrentTap } from '@/store/userActionStore';
import { useUserId } from '@/store/sessionStore';
import { NavigationTap } from '@/constants/taps';
import NavItem from './NavItem';

function NavigationBar() {
  const userId = useUserId();
  const currentTap = useCurrentTap();
  const { setScrollPos } = useUserActionStore((state) => state.actions);

  const navItems = [
    {
      label: NavigationTap.WELL,
      href: PAGES.HOME,
      icon: WellIcon,
    },
    {
      label: NavigationTap.FEED,
      href: PAGES.FEED,
      icon: FeedIcon,
      onClick: () => setScrollPos(null),
    },
    {
      label: NavigationTap.SEARCH,
      href: PAGES.SEARCH_HOME,
      icon: SearchIcon,
    },
    {
      label: NavigationTap.PROFILE,
      href: `/${userId}/profile`,
      icon: ProfileIcon,
    },
  ];

  const renderNavItem = ({ label, href, icon: Icon, onClick }: any) => (
    <NavItem
      key={label}
      label={label}
      href={href}
      isActive={currentTap === label}
      onClick={onClick}
      icon={
        <Icon fill={currentTap === label ? '#313239' : '#B3B6C5'} height={22} />
      }
    />
  );

  return (
    <div
      id='navBar'
      className='z-50 flex w-full shrink-0 items-center justify-around border-t border-gray-300 bg-white px-[20px] pb-[24px] pt-[10px]'
    >
      {navItems.map(renderNavItem)}
    </div>
  );
}

export default NavigationBar;
