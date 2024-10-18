'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FeedIcon, ProfileIcon, SearchIcon, WellIcon } from 'public/icons';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { PAGES } from '@/constants/page';

const MotionLink = motion(Link);

function NavigationBar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div className='z-50 flex h-[80px] w-full shrink-0 items-center justify-around border-t border-gray-300 bg-white px-[20px]'>
      <MotionLink
        whileTap={{ scale: 1.2 }}
        href={PAGES.HOME}
        className='navItem'
      >
        <WellIcon
          fill={
            pathname === PAGES.HOME || pathname.includes(PAGES.WELL)
              ? '#313239'
              : '#B3B6C5'
          }
          height={22}
        />
        <span
          className={`text-body-sm-bold ${pathname === PAGES.HOME || pathname.includes(PAGES.WELL) ? 'text-gray-800' : 'text-gray-500'}`}
        >
          우물
        </span>
      </MotionLink>
      <MotionLink
        whileTap={{ scale: 1.2 }}
        href={PAGES.FEED}
        className='navItem'
      >
        <FeedIcon
          fill={pathname === PAGES.FEED ? '#313239' : '#B3B6C5'}
          height={22}
        />
        <span
          className={`text-body-sm-bold ${pathname === PAGES.FEED ? 'text-gray-800' : 'text-gray-500'}`}
        >
          피드
        </span>
      </MotionLink>
      <MotionLink
        whileTap={{ scale: 1.2 }}
        href={PAGES.SEARCH_HOME}
        className='navItem'
      >
        <SearchIcon
          fill={pathname === PAGES.SEARCH_HOME ? '#313239' : '#B3B6C5'}
        />
        <span
          className={`text-body-sm-bold ${pathname === PAGES.SEARCH_HOME ? 'text-gray-800' : 'text-gray-500'}`}
        >
          책검색
        </span>
      </MotionLink>
      <MotionLink
        whileTap={{ scale: 1.2 }}
        href={`/${session?.user.id}/profile`}
        className='navItem'
      >
        <ProfileIcon
          fill={pathname.includes(PAGES.PROFILE) ? '#313239' : '#B3B6C5'}
        />
        <span
          className={`text-body-sm-bold ${pathname.includes(PAGES.PROFILE) ? 'text-gray-800' : 'text-gray-500'}`}
        >
          프로필
        </span>
      </MotionLink>
    </div>
  );
}

export default NavigationBar;
