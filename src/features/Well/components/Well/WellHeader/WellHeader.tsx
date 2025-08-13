'use client';

import React, { useState } from 'react';
import { EditIcon, WellListIcon, BackIcon } from 'public/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PAGES } from '@/constants/page';
import WellEditSheet from './WellEditSheet';

interface Props {
  /** 우물 소유 유저 id */
  userId?: string;
  /** 우물 id */
  wellId?: string;
  /** 현재 로그인한 유저인지 여부 */
  isRootUser: boolean;
  /** 뒤로가기 버튼 유무 */
  hasHomeButton?: boolean;
  /** 기본 우물인지 여부 */
  isDefaultWell?: boolean;
}

/** 우물 헤더 컴포넌트 */
function WellHeader({
  userId,
  wellId,
  isRootUser,
  hasHomeButton = true,
  isDefaultWell,
}: Props) {
  const router = useRouter();
  const isMyWell = isRootUser && userId && wellId;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='safe-header absolute left-[50%] z-20 flex w-[450px] translate-x-[-50%] gap-[20px] pt-[70px] mobile:left-0 mobile:w-full mobile:translate-x-0'>
      {hasHomeButton && isMyWell && (
        <Link
          href={PAGES.HOME}
          className='absolute left-[28px] top-[28px] z-20'
        >
          <WellListIcon />
        </Link>
      )}
      {hasHomeButton && !isMyWell && (
        <button
          type='button'
          onClick={() => router.back()}
          className='absolute left-[28px] top-[28px] z-20'
        >
          <BackIcon id='icon' fill='#B3B6C4' />
        </button>
      )}
      {isMyWell && !isDefaultWell && (
        <button
          type='button'
          onClick={() => setIsOpen(true)}
          className='absolute right-[28px] top-[28px] z-20'
        >
          <EditIcon />
        </button>
      )}
      <WellEditSheet
        isOpen={isOpen}
        closeSheet={() => setIsOpen(false)}
        userId={userId}
        wellId={wellId}
      />
    </div>
  );
}

export default WellHeader;
