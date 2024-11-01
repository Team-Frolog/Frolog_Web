'use client';

import React, { useEffect, useState } from 'react';
import { CONS_TAG, PROS_TAG } from '@/constants/tags';
import { Tag as TagType } from '@/types/tag';
import { useTags } from '@/hooks/useTags';
import { motion, useAnimationControls } from 'framer-motion';
import { ExpandIcon } from 'public/icons';
import { useFormContext } from 'react-hook-form';
import Tag from './Tag';

interface Props {
  type: TagType;
}

function TagList({ type }: Props) {
  const { handleTagSelect, selectedTags } = useTags(type);
  const controls = useAnimationControls();
  const { getValues } = useFormContext();
  const [isExpanded, setIsExpanded] = useState<boolean>(
    getValues()[type].length
  );
  const tagData = type === 'pros' ? PROS_TAG : CONS_TAG;

  useEffect(() => {
    if (isExpanded) {
      controls.start({ height: 'auto' });
    } else {
      controls.start({ height: '170px' });
    }
  }, [isExpanded, controls]);

  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <span className='text-body-md text-gray-700'>
        {type === 'pros' ? '장점' : '단점'} 키워드 (1~5개 고르세요)
      </span>
      <motion.div
        initial={{ height: isExpanded ? 'auto' : '170px' }}
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
            size='big'
            tagValue={item.value}
            onClick={() => handleTagSelect(item.id)}
            isSelected={selectedTags.includes(item.id)}
          />
        ))}
      </motion.div>
      <button
        type='button'
        className='flex w-full justify-center py-[12px]'
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <ExpandIcon
          className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
    </div>
  );
}

export default TagList;
