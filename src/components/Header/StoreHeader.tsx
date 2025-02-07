'use client';

import React from 'react';
import { STORE_TABS } from '@/constants/tabs';
import { useRouter } from 'next/navigation';
import { useWallet } from '@/features/Store/hooks/useWallet';
import BackButton from '../Button/BackButton';
import TabMenu from '../Tab/TabMenu';

interface Props {
  userId?: string;
}

/** 상점 페이지 헤더
 * - '상점', '미션' 2가지 탭으로 구성되어 있습니다.
 * - 유저의 포인트 내역이 포함됩니다.
 */
function StoreHeader({ userId }: Props) {
  const router = useRouter();
  const { points } = useWallet(userId);

  return (
    <header className='duration-50 block h-fit w-full gap-3 bg-white p-[24px] transition-all'>
      <BackButton fill='#727384' onClick={() => router.back()} />
      <div className='flex items-center justify-between'>
        <TabMenu tabs={STORE_TABS} theme='light' />
        <div className='h-fit rounded-[50px] bg-gray-300 px-[14px] py-[8px] text-title-lg-bold'>
          {points?.toLocaleString()} P
        </div>
      </div>
    </header>
  );
}

export default StoreHeader;
