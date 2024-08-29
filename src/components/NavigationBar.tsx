'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FeedIcon, ProfileIcon, SearchIcon, WellIcon } from 'public/icons';

function NavigationBar() {
  const pathname = usePathname();
  return (
    <div className='flex h-[80px] w-full shrink-0 items-center justify-around bg-white px-[20px]'>
      <Link href='/' className='navItem'>
        <WellIcon fill={pathname === '/' ? '#313239' : '#B3B6C5'} height={22} />
        <span
          className={`text-body_sm_bold ${pathname === '/' ? 'text-gray-800' : 'text-gray-500'}`}
        >
          우물
        </span>
      </Link>
      <Link href='/feed' className='navItem'>
        <FeedIcon
          fill={pathname === '/feed' ? '#313239' : '#B3B6C5'}
          height={22}
        />
        <span
          className={`text-body_sm_bold ${pathname === '/feed' ? 'text-gray-800' : 'text-gray-500'}`}
        >
          피드
        </span>
      </Link>
      <Link href='/search-main' className='navItem'>
        <SearchIcon
          fill={pathname === '/search-main' ? '#313239' : '#B3B6C5'}
        />
        <span
          className={`text-body_sm_bold ${pathname === '/search-main' ? 'text-gray-800' : 'text-gray-500'}`}
        >
          책 검색
        </span>
      </Link>
      <Link href='/profile' className='navItem'>
        <ProfileIcon fill={pathname === '/profile' ? '#313239' : '#B3B6C5'} />
        <span
          className={`text-body_sm_bold ${pathname === '/profile' ? 'text-gray-800' : 'text-gray-500'}`}
        >
          내 정보
        </span>
      </Link>
    </div>
  );
}

export default NavigationBar;
