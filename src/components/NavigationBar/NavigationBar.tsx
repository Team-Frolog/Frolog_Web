'use client';

import React from 'react';
import { FeedIcon, ProfileIcon, SearchIcon, WellIcon } from 'public/icons';
import { PAGES } from '@/constants/page';
import { getPath } from '@/utils/getPath';
import { usePathname, useSearchParams } from 'next/navigation';
import useUserActionStore from '@/store/userActionStore';
import { useUserId } from '@/store/sessionStore';
import { NavItemLabel, NavItemKey } from '@/constants/nav';
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
      label: NavItemLabel.WELL,
      href: PAGES.HOME,
      icon: WellIcon,
      navKey: NavItemKey.WELL,
    },
    {
      label: NavItemLabel.FEED,
      href: PAGES.FEED,
      icon: FeedIcon,
      onClick: () => setScrollPos(null),
      navKey: NavItemKey.FEED,
    },
    {
      label: NavItemLabel.SEARCH,
      href: PAGES.SEARCH_HOME,
      icon: SearchIcon,
      navKey: NavItemKey.SEARCH,
    },
    {
      label: NavItemLabel.PROFILE,
      href: getPath.profile(userId ?? ''),
      icon: ProfileIcon,
      navKey: NavItemKey.PROFILE,
    },
  ];

  const renderNavItem = ({
    label,
    href,
    icon: Icon,
    onClick,
    navKey,
  }: NavItemProps) => {
    const isActive =
      pathname === href ||
      currentTapKey === navKey ||
      (label === NavItemLabel.WELL &&
        (pathname === PAGES.DEFAULT || pathname === PAGES.EXPLORE));

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
    <div
      id='navBar'
      className='z-50 flex w-full shrink-0 items-center justify-around border-t border-gray-300 bg-white px-[20px] pb-[24px] pt-[10px]'
    >
      {navItems.map(renderNavItem)}
    </div>
  );
}

export default NavigationBar;
