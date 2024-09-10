'use client';

import React from 'react';
import { HeartIcon } from 'public/icons';
import { motion } from 'framer-motion';
import FeedHeader from '../FeedList/FeedHeader';

function CommentItem() {
  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <FeedHeader />
      <p className='break-all px-page text-body-lg text-gray-800'>comment</p>
      <div className='flex items-center justify-between px-page'>
        <div className='flex gap-[8px]'>
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
            className='text-body-md text-gray-600'
          >
            댓글 달기
          </motion.button>
        </div>
        <span className='text-body-md text-gray-600'>2024.08.20</span>
      </div>
    </div>
  );
}

export default CommentItem;
