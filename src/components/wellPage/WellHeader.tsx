'use client';

import { ICONS } from '@/constants/icons';
import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

function WellHeader() {
  return (
    <div className='fixed left-[50%] top-0 flex w-[450px] translate-x-[-50%] flex-col items-center gap-[20px] pt-[70px] mobile:left-0 mobile:w-full mobile:translate-x-0'>
      <Image
        src={IMAGES.well.header}
        alt='well-header'
        width={390}
        height={144}
        className='absolute left-0 top-0 w-full'
      />
      <h1 className='text-title_xl_bold'>소중한 나의 첫 우물</h1>
      <div className='flex flex-col items-center gap-[4px]'>
        <Image
          src={ICONS.well.arrow}
          alt='arrow'
          width={24}
          height={24}
          className='mb-[6px]'
        />

        <h3 className='text-body_xl_bold'>로그인이 필요해요</h3>
        <span className='text-body_md text-gray-600'>현재 높이 0cm</span>
      </div>
      <div className='absolute left-0 top-[30px] flex h-full w-full items-center justify-center'>
        <motion.img
          animate={{
            width: ['0%', '80%', '0%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'linear',
          }}
          src={IMAGES.well.pointing}
          alt='pointing'
          width={276}
          height={276}
        />
      </div>
    </div>
  );
}

export default WellHeader;
