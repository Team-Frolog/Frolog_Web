'use client';

import WellEntryHeader from '@/components/Header/WellEntryHeader';
import { useRouter } from 'next/navigation';
import { StoreIcon } from 'public/icons';
import React from 'react';
import BackButton from '@/components/Button/BackButton';
import { useProfile } from '@/hooks/useProfile';
import { PAGES } from '@/constants/page';
import CustomMotionLink from '@/components/Link/CustomMotionLink';

interface Props {
  /** 유저 id */
  userId?: string;
  /** 상점 버튼 유무 */
  hasStoreButton?: boolean;
  /** 뒤로가기 버튼 유무 */
  hasBackButton?: boolean;
  /** 헤더 배경 색상 */
  bgColor?: string;
}

/** 사이드 형태의 우물 입구 헤더 컴포넌트 */
function SideWellHeader({
  userId,
  bgColor,
  hasStoreButton = false,
  hasBackButton = false,
}: Props) {
  const router = useRouter();
  const { profile } = useProfile(userId);

  return (
    <WellEntryHeader
      title={
        profile ? (
          <>
            {profile.username}의
            <br />
            우물
          </>
        ) : (
          '우물'
        )
      }
      bgColor={bgColor}
    >
      {hasBackButton && (
        <BackButton
          type='bg'
          safeArea='back-button'
          onClick={() => router.back()}
        />
      )}
      {hasStoreButton && (
        <CustomMotionLink
          id='store-button'
          type='button'
          prefetch
          whileTap={{ scale: 0.9 }}
          href={PAGES.STORE}
          className='absolute right-[24px] top-[24px] z-70'
        >
          <StoreIcon />
        </CustomMotionLink>
      )}
    </WellEntryHeader>
  );
}

export default SideWellHeader;
