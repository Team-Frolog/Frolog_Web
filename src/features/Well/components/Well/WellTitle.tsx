'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PAGES } from '@/constants/page';
import WellActionButton from './Pointing/WellActionButton';

interface Props {
  /** 타이틀 */
  title: string;
  /** 우물 id */
  wellId?: string;
  /** 우물 내 도서 개수 */
  itemCount?: number;
  /** 클릭 유도 여부 */
  isPointing?: boolean;
  /** 현재 로그인한 유저인지 여부 */
  isRootUser?: boolean;
}

/** 우물 타이틀 컴포넌트 */
function WellTitle({
  title,
  wellId,
  itemCount,
  isPointing = false,
  isRootUser = false,
}: Props) {
  return (
    <div className='flex-col-center relative flex w-full shrink-0'>
      <div className='pointer-events-none absolute left-0 top-0 z-10 flex w-full justify-between overscroll-contain'>
        <div className='well-header-left' />
        <div className='well-header-right' />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex-column items-center gap-[20px] py-[50px]'
      >
        <h1 className='text-title-xl-bold'>{title}</h1>
        {isRootUser && (
          <WellActionButton
            btnName='책 추가하기'
            wellId={wellId}
            href={PAGES.SEARCH}
            isPointing={isPointing}
            itemCount={itemCount}
          />
        )}
      </motion.div>
    </div>
  );
}

export default WellTitle;
