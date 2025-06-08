'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { WellAddIcon } from 'public/icons';
import Link from 'next/link';
import { getPath } from '@/utils/getPath';

const MotionLink = motion.create(Link);

interface Props {
  userId: string;
}

/** 우물 추가 버튼 컴포넌트 */
function WellAddButton({ userId }: Props) {
  return (
    <MotionLink
      id='nav-floating'
      whileTap={{ scale: 0.95 }}
      href={getPath.wellCreate(userId)}
      className='fixed right-[24px] z-50'
    >
      <WellAddIcon />
    </MotionLink>
  );
}

export default WellAddButton;
