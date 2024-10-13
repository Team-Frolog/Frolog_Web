'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FeedIcon, ProfileIcon, SearchIcon, WellIcon } from 'public/icons';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

function NavigationBar() {
  const pathname = usePathname();

  return (
    <div className='z-50 flex h-[80px] w-full shrink-0 items-center justify-around border-t border-gray-300 bg-white px-[20px]'>
      <MotionLink whileTap={{ scale: 1.2 }} href='/' className='navItem'>
        <WellIcon fill={pathname === '/' ? '#313239' : '#B3B6C5'} height={22} />
        <span
          className={`text-body-sm-bold ${pathname === '/' ? 'text-gray-800' : 'text-gray-500'}`}
        >
          우물
        </span>
      </MotionLink>
      <MotionLink whileTap={{ scale: 1.2 }} href='/feed' className='navItem'>
        <FeedIcon
          fill={pathname === '/feed' ? '#313239' : '#B3B6C5'}
          height={22}
        />
        <span
          className={`text-body-sm-bold ${pathname === '/feed' ? 'text-gray-800' : 'text-gray-500'}`}
        >
          피드
        </span>
      </MotionLink>
      <MotionLink
        whileTap={{ scale: 1.2 }}
        href='/search-main'
        className='navItem'
      >
        <SearchIcon
          fill={pathname === '/search-main' ? '#313239' : '#B3B6C5'}
        />
        <span
          className={`text-body-sm-bold ${pathname === '/search-main' ? 'text-gray-800' : 'text-gray-500'}`}
        >
          책검색
        </span>
      </MotionLink>
      <MotionLink
        whileTap={{ scale: 1.2 }}
        href='/profile'
        className='navItem'
      >
        <ProfileIcon fill={pathname === '/profile' ? '#313239' : '#B3B6C5'} />
        <span
          className={`text-body-sm-bold ${pathname === '/profile' ? 'text-gray-800' : 'text-gray-500'}`}
        >
          프로필
        </span>
      </MotionLink>
    </div>
  );
}

export default NavigationBar;
