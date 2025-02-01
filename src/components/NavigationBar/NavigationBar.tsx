'use client';

import React from 'react';
import { FeedIcon, ProfileIcon, SearchIcon, WellIcon } from 'public/icons';
import { PAGES } from '@/constants/page';
import { usePathname, useSearchParams } from 'next/navigation';
import useUserActionStore from '@/store/userActionStore';
import { useUserId } from '@/store/sessionStore';
import { NavigationTap, TapKey } from '@/constants/taps';
import NavItem from './NavItem';

interface NavItemProps {
  label: NavigationTap;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  tapKey: TapKey;
}

function NavigationBar() {
  const userId = useUserId();
  const pathname = usePathname();
  const currentTapKey = useSearchParams().get('tap');
  const { setScrollPos } = useUserActionStore((state) => state.actions);

  const navItems: NavItemProps[] = [
    {
      label: NavigationTap.WELL,
      href: PAGES.HOME,
      icon: WellIcon,
      tapKey: TapKey.WELL,
    },
    {
      label: NavigationTap.FEED,
      href: PAGES.FEED,
      icon: FeedIcon,
      onClick: () => setScrollPos(null),
      tapKey: TapKey.FEED,
    },
    {
      label: NavigationTap.SEARCH,
      href: PAGES.SEARCH_HOME,
      icon: SearchIcon,
      tapKey: TapKey.SEARCH,
    },
    {
      label: NavigationTap.PROFILE,
      href: `/${userId}/profile`,
      icon: ProfileIcon,
      tapKey: TapKey.PROFILE,
    },
  ];

  const renderNavItem = ({
    label,
    href,
    icon: Icon,
    onClick,
    tapKey,
  }: NavItemProps) => {
    const isActive =
      pathname === href ||
      currentTapKey === tapKey ||
      (label === NavigationTap.WELL && pathname === '/default');

    return (
      <NavItem
        key={label}
        label={label}
        href={href}
        tapKey={tapKey}
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
