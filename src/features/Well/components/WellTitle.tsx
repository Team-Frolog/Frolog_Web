'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlusIcon, ArrowIcon } from 'public/icons';
import { PAGES } from '@/constants/page';
import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import Pointing from './Pointing';

function WellTitle() {
  const { data: session } = useSession();

  return (
    <div className='flex-col-center relative flex w-full shrink-0'>
      <Image
        src={IMAGES.well.header}
        alt='well-header'
        width={390}
        height={144}
        className='absolute left-0 top-0 w-full'
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col gap-[20px] py-[50px]'
      >
        <h1 className='text-title-xl-bold'>소중한 나의 첫 우물</h1>
        <div className='flex-col-center gap-[4px]'>
          <div className='relative'>
            <Pointing />
            <Link
              href={session ? PAGES.SEARCH : PAGES.LANDING}
              className='relative z-50 cursor-pointer'
            >
              {session ? <PlusIcon /> : <ArrowIcon />}
            </Link>
          </div>

          <h3 className='text-body-xl-bold mt-[2px]'>
            {session ? '책 추가하기' : '로그인이 필요해요'}
          </h3>
          <span className='text-body-md text-gray-600'>현재 높이 0cm</span>
        </div>
      </motion.div>
    </div>
  );
}

export default WellTitle;
