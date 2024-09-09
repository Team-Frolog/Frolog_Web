import Rating from '@/components/Rating/Rating';
import TagSlider from '@/components/Tag/TagSlider';
import FeedHeader from '@/features/Feed/components/FeedHeader';
import { ChatIcon, HeartIcon } from 'public/icons';
import React from 'react';
import { motion } from 'framer-motion';

function ReviewForBook() {
  const pros = ['easy', 'organized', 'tears', 'warm'];
  const cons = ['biased', 'no_evidence', 'background', 'issuing'];

  return (
    <div className='flex w-full flex-col'>
      <FeedHeader />
      <div className='pt-[30px]'>
        <div className='tooltip-feed relative flex w-full rounded-t-[20px] bg-category-bg-novel px-page py-[12px] after:border-b-category-bg-novel'>
          <Rating
            rating={3.5}
            hasComment
            category='novel'
            textClass='text-heading-lg-bold text-category-text-novel'
          />
        </div>
      </div>
      <div className='flex flex-col gap-[20px] rounded-b-[20px] bg-white py-[20px]'>
        <div className='flex-col-center w-full gap-[8px]'>
          <TagSlider type='pros' tagKeys={pros} />
          <TagSlider type='cons' tagKeys={cons} />
        </div>
        <div className='flex flex-col gap-[12px] px-page'>
          <h3 className='break-all text-title-xl-bold'>리뷰 타이틀</h3>
          <p className='break-all text-body-lg'>컨텐츠</p>
        </div>
        <div className='flex justify-between px-page'>
          <span className='text-body-md text-gray-600'>2024.07.30</span>
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
        </div>
      </div>
    </div>
  );
}

export default ReviewForBook;
