'use client';

import { ICONS } from '@/constants/icons';
import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { PAGES } from '@/constants/page';
import Pointing from './Pointing';

function WellHeader() {
  const { data: session } = useSession();

  return (
    <div className='flex-col-center absolute left-[50%] top-0 z-10 w-[450px] translate-x-[-50%] gap-[20px] pt-[70px] mobile:left-0 mobile:w-full mobile:translate-x-0'>
      <Image
        src={IMAGES.well.header}
        alt='well-header'
        width={390}
        height={144}
        className='absolute left-0 top-0 w-full'
      />
      {session && (
        <button type='button' className='absolute right-[28px] top-[28px] z-20'>
          <Image src={ICONS.well.edit} alt='edit' width={24} height={24} />
        </button>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col gap-[20px]'
      >
        <Pointing />
        <h1 className='text-title_xl_bold'>소중한 나의 첫 우물</h1>
        <div className='flex-col-center gap-[4px]'>
          <Link
            href={session ? '/new-review?id=9791193154250' : PAGES.LANDING}
            className='relative z-[50px] cursor-pointer'
          >
            <Image
              src={session ? ICONS.well.plus : ICONS.well.arrow}
              alt='well button'
              width={24}
              height={24}
              className='mb-[6px]'
            />
          </Link>
          <h3 className='text-body_xl_bold'>
            {session ? '책 추가하기' : '로그인이 필요해요'}
          </h3>
          <span className='text-body_md text-gray-600'>현재 높이 0cm</span>
        </div>
      </motion.div>
    </div>
  );
}

export default WellHeader;
