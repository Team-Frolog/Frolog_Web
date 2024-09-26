'use client';

import React from 'react';
import { ArrowIcon, ChatIcon } from 'public/icons';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LikeButton from '@/components/Button/LikeButton';
import { GetMemoRes, GetReviewRes } from '@frolog/frolog-api';

const MotionLink = motion(Link);

interface Props {
  feedData: GetReviewRes | GetMemoRes;
}

function FeedBar({ feedData }: Props) {
  return (
    <div className='flex w-full items-center justify-between rounded-b-[20px] border-t border-t-gray-400 bg-white px-page py-[12px]'>
      <div className='flex gap-[20px]'>
        <LikeButton likeCount={feedData.like_count || 0} />
        <motion.button
          whileTap={{ scale: 1.1 }}
          type='button'
          className='flex items-center gap-[4px]'
        >
          <ChatIcon />
          <span className='text-body-md text-gray-600'>
            {feedData.comment_count || 0}
          </span>
        </motion.button>
      </div>
      <MotionLink
        whileTap={{ scale: 1.1 }}
        href={`/book/${feedData.isbn}`}
        className='flex items-center gap-[4px] text-body-md text-gray-600'
      >
        우물에 담기 <ArrowIcon fill='#727384' width={24} height={24} />
      </MotionLink>
    </div>
  );
}

export default FeedBar;
