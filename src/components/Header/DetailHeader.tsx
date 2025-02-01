'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { TapKey } from '@/constants/taps';
import ResponsiveHeaderLayout from '@/layouts/ResponsiveHeaderLayout';
import { runWhenLoggedIn } from '@/utils/runWhenLoggedIn';
import { useUserId } from '@/store/sessionStore';
import { RightArrowIcon, WellIcon } from 'public/icons';
import { motion } from 'framer-motion';
import { PAGES } from '@/constants/page';

interface Props {
  /** 프로필 대상 유저의 id */
  profileUserId: string;
}

function DetailHeader({ profileUserId }: Props) {
  const router = useRouter();
  const userId = useUserId();
  const isRootUser = userId === profileUserId;
  const currentTap = useSearchParams().get('tap') || TapKey.FEED;

  return (
    <ResponsiveHeaderLayout onClick={() => router.back()}>
      {!isRootUser && (
        <div className='flex flex-1 justify-end'>
          <motion.button
            type='button'
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              runWhenLoggedIn(
                () =>
                  router.push(
                    `/${profileUserId}${PAGES.PROFILE}?tap=${currentTap}`
                  ),
                'feed'
              )
            }
            className='flex items-center gap-[6px]'
          >
            <div className='flex flex-col items-center gap-[2px] text-body-sm-bold text-main'>
              <WellIcon fill='#00ce4c' />
              <span>우물</span>
            </div>
            <RightArrowIcon />
          </motion.button>
        </div>
      )}
    </ResponsiveHeaderLayout>
  );
}

export default DetailHeader;
