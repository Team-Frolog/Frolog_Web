'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getTags } from '@/utils/getTags';
import { useSlideDrag } from '@/hooks/gesture/useSlideDrag';
import Tag from './Tag';

interface Props {
  type: 'pros' | 'cons';
  tagKeys: string[];
}

function TagSlider({ type, tagKeys }: Props) {
  const tagData = getTags(type, tagKeys);
  const { drag, sliderRef, motionDivRef } = useSlideDrag();

  return (
    <div ref={sliderRef} className='relative flex w-[98%] overflow-hidden'>
      <div
        className='absolute bottom-0 left-0 z-10 h-full w-[50px] -rotate-180 transition-all duration-300'
        style={{ boxShadow: 'inset -30px 0px 10px -7px rgb(255, 255, 255)' }}
      />
      <div
        className='absolute bottom-0 right-0 z-10 h-full w-[30px] transition-all duration-300'
        style={{ boxShadow: 'inset -30px 0px 10px -7px rgb(255, 255, 255)' }}
      />
      <motion.div
        ref={motionDivRef}
        drag={drag}
        dragConstraints={sliderRef}
        dragElastic={0.2}
        className='z-0 flex w-fit gap-[4px] px-[24px]'
      >
        {tagData.map((item) => (
          <Tag key={item.id} type={type} size='small' tagValue={item.value} />
        ))}
      </motion.div>
    </div>
  );
}

export default TagSlider;
