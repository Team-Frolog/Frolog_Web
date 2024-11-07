'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useWallet } from '@/features/Store/hooks/useWallet';
import BackButton from '../Button/BackButton';

interface Props {
  userId: string | undefined;
}

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
            <button
              type='button'
              onClick={() => router.replace('/store')}
              className='text-heading-md-bold'
              style={{
                color: pathname.includes('store') ? '#313239' : '#B3B6C4',
              }}
            >
              상점
            </button>
            <button
              type='button'
              onClick={() => router.replace('/mission')}
              className='text-heading-md-bold'
              style={{
                color: pathname.includes('mission') ? '#313239' : '#B3B6C4',
              }}
            >
              미션
            </button>
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
