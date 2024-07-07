'use client';

import React, { useEffect, useState } from 'react';
import { conTags, proTags } from '@/data/tag';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { ICONS } from '@/constants/icons';
import Tag from './Tag';

interface Props {
  type: 'pros' | 'cons';
}

function TagList({ type }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimationControls();
  const tagData = type === 'pros' ? proTags : conTags;

  useEffect(() => {
    if (isExpanded) {
      controls.start({ height: 'auto' });
    } else {
      controls.start({ height: '170px' });
    }
  }, [isExpanded]);

  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <span className='text-body_md text-gray-700'>
        {type === 'pros' ? '장점' : '단점'} 키워드 (1~5개 고르세요)
      </span>
      <motion.div
        animate={controls}
        transition={{ duration: 0.3 }}
        className='relative flex w-[90%] flex-wrap gap-[16px] overflow-hidden mobile:w-full'
      >
        {tagData.map((item) => (
          <Tag key={item.id} type='pros' tag={item} />
        ))}
        <div
          className={`absolute bottom-0 left-0 z-10 h-[60px] w-full transition-all duration-300 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}
          style={{
            boxShadow: 'inset 0px -120px 60px -70px #ffffff',
          }}
        />
      </motion.div>
      <button
        type='button'
        className={`flex w-full justify-center transition-all duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <Image src={ICONS.expand} alt='expand' width={25} height={24} />
      </button>
    </div>
  );
}

export default TagList;

// box-shadow: inset 0px -100px 70px -90px rgba(0,0,0,0);
