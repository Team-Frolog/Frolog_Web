'use client';

import WellEntryHeader from '@/components/Header/WellEntryHeader';
import { useRouter } from 'next/navigation';
import { StoreIcon } from 'public/icons';
import React from 'react';
import { motion } from 'framer-motion';
import BackButton from '@/components/Button/BackButton';
import { useProfile } from '@/hooks/useProfile';
import { PAGES } from '@/constants/page';
import Link from 'next/link';

const MotionLink = motion(Link);

interface Props {
  userId?: string;
  hasStoreButton?: boolean;
  hasBackButton?: boolean;
  bgColor?: string;
}

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
          type='green'
          safeArea='back-button'
          onClick={() => router.back()}
        />
      )}
      {hasStoreButton && (
        <MotionLink
          id='store-button'
          type='button'
          prefetch
          whileTap={{ scale: 0.9 }}
          href={PAGES.STORE}
          className='absolute right-[24px] top-[24px] z-70'
        >
          <StoreIcon />
        </MotionLink>
      )}
    </WellEntryHeader>
  );
}

export default SideWellHeader;
