'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PAGES } from '@/constants/page';
import { ArrowIcon, PlusIcon } from 'public/icons';
import Pointing from './Pointing';

function PointingButton() {
  const { data: session } = useSession();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  return (
    isMounted && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex-col-center gap-[4px]'
      >
        <div className='relative h-[28px] w-[28px]'>
          <Link
            href={session ? PAGES.SEARCH : PAGES.LANDING}
            className='absolute inset-x-0 top-[50%] z-50 mx-auto -translate-y-1/2 cursor-pointer'
          >
            {session ? (
              <PlusIcon />
            ) : (
              <ArrowIcon fill='#313239' width={28} height={28} />
            )}
          </Link>
          <Pointing />
        </div>

        <h3 className='mt-[2px] text-body-xl-bold'>
          {session ? '책 추가하기' : '로그인이 필요해요'}
        </h3>

        <span className='text-body-md text-gray-600'>현재 높이 0cm</span>
      </motion.div>
    )
  );
}

export default PointingButton;
