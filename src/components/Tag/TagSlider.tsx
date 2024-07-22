'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MajorTag from './MajorTag';

function TagSlider({ type }: { type: 'pros' | 'cons' }) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const motionDivRef = useRef<HTMLDivElement | null>(null);
  const [drag, setDrag] = useState<'x' | undefined>(undefined);

  const data = [
    '완독하기 쉬운',
    '마음이 따듯해지는',
    '스트레스가 싹',
    '해석이 무궁무진',
    '대화 소재로 딱',
  ];

  useEffect(() => {
    if (
      sliderRef.current &&
      motionDivRef.current &&
      sliderRef.current?.offsetWidth >= motionDivRef.current?.offsetWidth
    ) {
      setDrag(undefined);
    } else {
      setDrag('x');
    }
  }, []);

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
        {data.map((item) => (
          <MajorTag key={item} type={type} text={item} />
        ))}
      </motion.div>
    </div>
  );
}

export default TagSlider;
