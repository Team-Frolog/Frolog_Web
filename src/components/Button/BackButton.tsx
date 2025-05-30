'use client';

import { BackIcon, BackBgIcon } from 'public/icons';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import WithConditionalRendering from '../HOC/WithConditionalRendering';

interface Props {
  onClick?: () => void;
  fill?: string;
  extraClass?: string;
  /** 버튼의 테마 */
  type?: 'normal' | 'bg';
  /** pwa 관련 클래스
   * - back-button: side-hedaer
   * - back-fixed: error, notfound page
   */
  safeArea?: 'back-button' | 'back-fixed';
}

/** BackIcon이 적용된 버튼
 * - 기본적으로 router.back()을 실행합니다.
 * - onClick이 주어진 경우 onClick을 실행합니다.
 * - type='green'인 경우 WellBackIcon이 적용됩니다. (타인의 프로필, 우물 내 백버튼)
 */
function BackButton({
  onClick,
  fill = '#B3B6C4',
  extraClass,
  type = 'normal',
  safeArea,
}: Props) {
  const router = useRouter();
  return (
    <>
      <WithConditionalRendering
        condition={type === 'normal'}
        fallback={
          <motion.button
            id={safeArea}
            type='button'
            whileTap={{ scale: 0.9 }}
            onClick={onClick || (() => router.back())}
            className='absolute left-[12px] top-[12px] z-70'
          >
            <BackBgIcon />
          </motion.button>
        }
      >
        <button
          id={safeArea}
          type='button'
          className={`cursor-pointer ${extraClass}`}
          onClick={onClick || (() => router.back())}
        >
          <BackIcon id='icon' fill={fill} />
        </button>
      </WithConditionalRendering>
    </>
  );
}

export default BackButton;
