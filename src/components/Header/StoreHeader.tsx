'use client';

import React from 'react';
import Link from 'next/link';
import { PAGES } from '@/constants/page';
import { usePathname, useRouter } from 'next/navigation';
import { useWallet } from '@/features/Store/hooks/useWallet';
import BackButton from '../Button/BackButton';

interface Props {
  userId: string | undefined;
}

/** 상점 페이지 헤더
 * - '상점', '미션' 2가지 탭으로 구성되어 있습니다.
 * - 유저의 포인트 내역이 포함됩니다.
 */
function StoreHeader({ userId }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { points } = useWallet(userId);

  return (
    <header className='duration-50 block h-fit w-full gap-3 bg-white p-[24px] transition-all'>
      <BackButton fill='#727384' onClick={() => router.back()} />
      <div className='flex items-center justify-between'>
        <div className='relative w-fit pb-[5px]'>
          <div className='flex gap-[24px]'>
            <Link
              type='button'
              replace
              href={PAGES.STORE}
              className='text-heading-md-bold'
              style={{
                color: pathname.includes('store') ? '#313239' : '#B3B6C4',
              }}
            >
              상점
            </Link>
            <Link
              type='button'
              replace
              href={PAGES.MISSION}
              className='text-heading-md-bold'
              style={{
                color: pathname.includes('mission') ? '#313239' : '#B3B6C4',
              }}
            >
              미션
            </Link>
          </div>
          <div
            id='bar'
            className={`absolute bottom-0 h-[3px] w-[60px] bg-gray-800 transition-all ${pathname.includes('mission') ? 'left-[84px]' : 'left-0'}`}
          />
        </div>
        <div className='h-fit rounded-[50px] bg-gray-300 px-[14px] py-[8px] text-title-lg-bold'>
          {points?.toLocaleString()} P
        </div>
      </div>
    </header>
  );
}

export default StoreHeader;
