'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MajorTag from '../tag/MajorTag';

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
    <div ref={sliderRef} className='relative flex w-full overflow-hidden'>
      {/* <div
        className='absolute right-0 top-[-2px] z-0 h-[30px] w-[30px] -rotate-90'
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 95.41%)',
        }}
      /> */}
      <motion.div
        ref={motionDivRef}
        drag={drag}
        dragConstraints={sliderRef}
        dragElastic={0.2}
        className='z-0 flex w-fit gap-[4px]'
      >
        {data.map((item) => (
          <MajorTag key={item} type={type} text={item} />
        ))}
      </motion.div>
    </div>
  );
}

export default TagSlider;
