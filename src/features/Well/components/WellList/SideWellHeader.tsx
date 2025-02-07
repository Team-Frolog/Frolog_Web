'use client';

import WellEntryHeader from '@/components/Header/WellEntryHeader';
import { useRouter } from 'next/navigation';
import { StoreIcon } from 'public/icons';
import React from 'react';
import BackButton from '@/components/Button/BackButton';
import { PAGES } from '@/constants/page';
import CustomMotionLink from '@/components/Link/CustomMotionLink';
import { WELL_TABS } from '@/constants/tabs';
import TabMenu from '@/components/Tab/TabMenu';

interface Props {
  /** 상점 버튼 유무 */
  hasStoreButton?: boolean;
  /** 뒤로가기 버튼 유무 */
  hasBackButton?: boolean;
  /** 헤더 배경 색상 */
  bgColor?: string;
}

/** 사이드 형태의 우물 입구 헤더 컴포넌트 */
function SideWellHeader({
  bgColor,
  hasStoreButton = false,
  hasBackButton = false,
}: Props) {
  const router = useRouter();

  return (
    <WellEntryHeader bgColor={bgColor}>
      <header className='flex h-fit w-full px-page py-[20px] pt-[50px]'>
        <TabMenu tabs={WELL_TABS} theme='light' />
      </header>
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
