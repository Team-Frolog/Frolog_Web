"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { WellAddIcon } from 'public/icons';
import React from 'react';

const MotionLink = motion(Link);

interface Props {
  userId: string;
}

function WellAddButton({userId}: Props) {
  return (
    <div className='flex h-fit w-fit flex-col items-center gap-[8px] place-self-center'>
      <MotionLink
        whileTap={{ scale: 0.95 }}
        href={`/${userId}/well/create`}
        className='h-[161px] w-[161px]'
      >
        <WellAddIcon className='h-full w-full' />
      </MotionLink>
      <span className='text-body-lg-bold'>새 우물 파기</span>
    </div>
  );
}

export default WellAddButton;
