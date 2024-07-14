'use client';

import React, { useEffect, useState } from 'react';
import { conTags, proTags } from '@/data/tag';
import { Tag as TagType } from '@/types/tag';
import { useTags } from '@/hooks/useTags';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { ICONS } from '@/constants/icons';
import Tag from './Tag';

interface Props {
  type: TagType;
}

function TagList({ type }: Props) {
  const { handleTagSelect, selectedTags } = useTags(type);
  const controls = useAnimationControls();
  const [isExpanded, setIsExpanded] = useState(false);
  const tagData = type === 'pros' ? proTags : conTags;

  useEffect(() => {
    if (isExpanded) {
      controls.start({ height: 'auto' });
    } else {
      controls.start({ height: '170px' });
    }
  }, [isExpanded, controls]);

  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <span className='text-body_md text-gray-700'>
        {type === 'pros' ? '장점' : '단점'} 키워드 (1~5개 고르세요)
      </span>
      <motion.div
        initial={{ height: '170px' }}
        animate={controls}
        transition={{ duration: 0.3 }}
        className='relative flex w-[90%] flex-wrap gap-[16px] overflow-hidden mobile:w-full'
      >
        <div
          className={`absolute bottom-0 left-0 h-[60px] w-full transition-all duration-300 ${isExpanded ? '-z-10 opacity-100' : 'z-10 opacity-100'}`}
          style={{
            boxShadow: 'inset 0px -120px 60px -70px #ffffff',
          }}
        />
        {tagData.map((item) => (
          <Tag
            key={item.id}
            type={type}
            tag={item}
            onClick={handleTagSelect}
            isSelected={selectedTags.includes(item.id)}
          />
        ))}
      </motion.div>
      <button
        type='button'
        className='flex w-full justify-center'
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <Image
          src={ICONS.expand}
          alt='expand'
          width={25}
          height={24}
          className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
    </div>
  );
}

export default TagList;
