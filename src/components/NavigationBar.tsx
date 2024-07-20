'use client';

import Link from 'next/link';
import React from 'react';
import WellIcon from 'public/icons/common/navigation/well-icon.svg';
import FeedIcon from 'public/icons/common/navigation/feed-icon.svg';
import SearchIcon from 'public/icons/common/navigation/search-icon.svg';
import ProfileIcon from 'public/icons/common/navigation/profile-icon.svg';
import { usePathname } from 'next/navigation';

function NavigationBar() {
  const pathname = usePathname();
  return (
    <div className='sticky bottom-0 left-0 flex h-[80px] w-full items-center justify-around bg-white px-[20px] pb-[15px]'>
      <Link href='/well' className='navItem'>
        <WellIcon
          fill={pathname === '/well' ? '#313239' : '#B3B6C5'}
          height={22}
        />
        <span
          className={`text-body_sm_bold ${pathname === '/well' ? 'text-gray-800' : 'text-gray-500'}`}
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
      <Link href='/search' className='navItem'>
        <SearchIcon fill={pathname === '/search' ? '#313239' : '#B3B6C5'} />
        <span
          className={`text-body_sm_bold ${pathname === '/search' ? 'text-gray-800' : 'text-gray-500'}`}
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
