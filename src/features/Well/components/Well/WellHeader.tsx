'use client';

import React from 'react';
import { EditIcon, WellListIcon } from 'public/icons';
import Link from 'next/link';
import { PAGES } from '@/constants/page';
import { getPath } from '@/utils/getPath';

interface Props {
  /** 우물 소유 유저 id */
  userId?: string;
  /** 우물 id */
  wellId?: string;
  /** 현재 로그인한 유저인지 여부 */
  isRootUser: boolean;
  /** 뒤로가기 버튼 유무 */
  hasHomeButton?: boolean;
}

/** 우물 헤더 컴포넌트 */
function WellHeader({
  userId,
  wellId,
  isRootUser,
  hasHomeButton = true,
}: Props) {
  const isMyWell = isRootUser && userId && wellId;

  return (
    <div className='safe-header absolute left-[50%] z-20 flex w-[450px] translate-x-[-50%] gap-[20px] pt-[70px] mobile:left-0 mobile:w-full mobile:translate-x-0'>
      {hasHomeButton && (
        <Link
          href={PAGES.HOME}
          className='absolute left-[28px] top-[28px] z-20'
        >
          <WellListIcon />
        </Link>
      )}
      {isMyWell && (
        <Link
          href={getPath.wellEdit(userId, wellId)}
          className='absolute right-[28px] top-[28px] z-20'
        >
          <EditIcon />
        </Link>
      )}
    </div>
  );
}

export default WellHeader;
