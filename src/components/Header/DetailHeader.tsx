'use client';

import React from 'react';
import ResponsiveHeaderLayout from '@/layouts/ResponsiveHeaderLayout';
import { runWhenLoggedIn } from '@/utils/runWhenLoggedIn';
import { useUserId } from '@/store/sessionStore';
import { motion } from 'framer-motion';
import { getPath } from '@/utils/getPath';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import WithWebViewTheme from '@/components/HOC/WithWebViewTheme';
import WithConditionalRendering from '../HOC/WithConditionalRendering';

interface Props {
  /** 프로필 대상 유저의 id */
  profileUserId: string;
}

function DetailHeader({ profileUserId }: Props) {
  const { navigate, router } = useCustomRouter('feed');
  const userId = useUserId();
  const isRootUser = userId === profileUserId;

  return (
    <WithWebViewTheme bgColor='black'>
      <ResponsiveHeaderLayout onClick={() => router.back()}>
        <WithConditionalRendering condition={!isRootUser}>
          <div className='flex flex-1 justify-end'>
            <motion.button
              type='button'
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                runWhenLoggedIn(
                  () => navigate(getPath.profile(profileUserId)),
                  'feed'
                )
              }
              className='flex items-center gap-[6px] text-body-lg-bold text-main'
            >
              우물 놀러가기
            </motion.button>
          </div>
        </WithConditionalRendering>
      </ResponsiveHeaderLayout>
    </WithWebViewTheme>
  );
}

export default DetailHeader;
