import React from 'react';
import { ArrowIcon, ChatIcon, HeartIcon } from 'public/icons';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

function FeedBar() {
  return (
    <div className='flex w-full items-center justify-between rounded-b-[20px] border-t border-t-gray-400 bg-white px-page py-[12px]'>
      <div className='flex gap-[20px]'>
        <motion.button
          whileTap={{ scale: 1.1 }}
          type='button'
          className='flex items-center gap-[4px]'
        >
          <HeartIcon />
          <span className='text-body-md text-gray-600'>13</span>
        </motion.button>
        <motion.button
          whileTap={{ scale: 1.1 }}
          type='button'
          className='flex items-center gap-[4px]'
        >
          <ChatIcon />
          <span className='text-body-md text-gray-600'>13</span>
        </motion.button>
      </div>
      <MotionLink
        whileTap={{ scale: 1.1 }}
        href='/book/9791193154250'
        className='flex items-center gap-[4px] text-body-md text-gray-600'
      >
        우물에 담기 <ArrowIcon fill='#727384' width={24} height={24} />
      </MotionLink>
    </div>
  );
}

export default FeedBar;
