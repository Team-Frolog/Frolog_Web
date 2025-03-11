'use client';

import React from 'react';
import { FeedIcon, ProfileIcon, SearchIcon, WellIcon } from 'public/icons';
import { PAGES } from '@/constants/page';
import { getPath } from '@/utils/getPath';
import { usePathname, useSearchParams } from 'next/navigation';
import { NavItemLabel, NavItemKey } from '@/types/nav';
import useUserActionStore from '@/store/userActionStore';
import { useUserId } from '@/store/sessionStore';
import { NAV_ITEM } from '@/constants/nav';
import NavItem from './NavItem';

interface NavItemProps {
  label: NavItemLabel;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  navKey: NavItemKey;
}

function NavigationBar() {
  const userId = useUserId();
  const pathname = usePathname();
  const currentTapKey = useSearchParams().get('nav');
  const { setScrollPos } = useUserActionStore((state) => state.actions);

  const navItems: NavItemProps[] = [
    {
      label: NAV_ITEM.well.label,
      href: PAGES.HOME,
      icon: WellIcon,
      navKey: NAV_ITEM.well.key,
    },
    {
      label: NAV_ITEM.feed.label,
      href: PAGES.FEED,
      icon: FeedIcon,
      onClick: () => setScrollPos(null, 'feed'),
      navKey: NAV_ITEM.feed.key,
    },
    {
      label: NAV_ITEM.search.label,
      href: PAGES.SEARCH_HOME,
      icon: SearchIcon,
      navKey: NAV_ITEM.search.key,
    },
    {
      label: NAV_ITEM.profile.label,
      href: getPath.profile(userId ?? ''),
      icon: ProfileIcon,
      navKey: NAV_ITEM.profile.key,
    },
  ];

  const renderNavItem = ({
    label,
    href,
    icon: Icon,
    onClick,
    navKey,
  }: NavItemProps) => {
    const isCurrentPath = pathname === href && pathname !== PAGES.PROFILE;
    const isSelectedTab = currentTapKey === navKey;
    const isWellSection =
      label === NAV_ITEM.well.label &&
      (pathname === PAGES.DEFAULT || pathname === PAGES.EXPLORE);

    const isActive = isCurrentPath || isSelectedTab || isWellSection;

    return (
      <NavItem
        key={label}
        label={label}
        href={href}
        navKey={navKey}
        isActive={isActive}
        onClick={onClick}
        icon={<Icon fill={isActive ? '#313239' : '#B3B6C5'} height={22} />}
      />
    );
  };

  return (
    <nav
      id='navBar'
      className='z-50 flex w-full shrink-0 items-center justify-around border-t border-gray-300 bg-white px-[20px] pb-[24px] pt-[10px]'
    >
      {navItems.map(renderNavItem)}
    </nav>
  );
}

export default NavigationBar;
