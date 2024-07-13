'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import MajorTag from '../tag/MajorTag';

function TagSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const data = [
    '독하기 쉬운',
    '마음이 따듯해지는',
    '스트레스가 싹',
    '해석이 무궁무진',
    '대화 소재로 딱',
  ];

  return (
    <div ref={sliderRef} className='flex w-full'>
      <motion.div
        drag='x'
        dragConstraints={sliderRef}
        dragElastic={0.2}
        className='flex w-fit gap-[4px] scrollbar-hide'
      >
        {data.map((item) => (
          <MajorTag key={item} type='pros' text={item} />
        ))}
      </motion.div>
    </div>
  );
}

export default TagSlider;
