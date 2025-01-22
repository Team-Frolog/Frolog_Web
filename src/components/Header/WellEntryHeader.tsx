'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import BackButton from '../Button/BackButton';

interface Props {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  bgColor?: string;
  /** 뒤로가기 버튼 존재 여부 (타인의 프로필 페이지에서 적용) */
  hasBackButton?: boolean;
}

/** 우물 입구를 표현한 헤더
 * - 피드, 검색, 프로필, 우물 리스트 페이지에서 활용됩니다.
 */
function WellEntryHeader({
  children,
  title,
  bgColor,
  hasBackButton = false,
}: Props) {
  const router = useRouter();

  return (
    <header className={`flex h-fit w-full ${bgColor || 'bg-white'}`}>
      {hasBackButton && (
        <BackButton
          type='bg'
          safeArea='back-button'
          onClick={() => router.back()}
        />
      )}
      <div className='safe-header pointer-events-none absolute left-0 z-60 flex w-full justify-between gap-[80px]'>
        <div className='side-header-left' />
        <div className='side-header-right' />
      </div>
      {title && (
        <div className='flex h-fit w-full px-page py-[20px] pt-[50px]'>
          <h1 className='w-fit max-w-[250px] text-start text-heading-md-bold'>
            {title}
          </h1>
        </div>
      )}
      {children}
    </header>
  );
}

export default WellEntryHeader;
