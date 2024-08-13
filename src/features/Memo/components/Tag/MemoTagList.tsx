'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MemoTag from './MemoTag';

function MemoTagList() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const motionDivRef = useRef<HTMLDivElement | null>(null);
  const [drag, setDrag] = useState<'x' | undefined>(undefined);

  useEffect(() => {
    if (
      sliderRef.current &&
      motionDivRef.current &&
      sliderRef.current.offsetWidth - 48 >= motionDivRef.current.offsetWidth
    ) {
      setDrag(undefined);
    } else {
      setDrag('x');
    }
  }, []);

  return (
    <div ref={sliderRef} className='relative flex w-full overflow-auto'>
      <motion.div
        ref={motionDivRef}
        drag={drag}
        dragConstraints={sliderRef}
        dragElastic={0.2}
        className='flex w-fit gap-[8px] px-[24px]'
      >
        <MemoTag type='phrase' />
        <MemoTag type='thought' />
        <MemoTag type='question' />
        <MemoTag type='question' />
        <MemoTag type='question' />
      </motion.div>
    </div>
  );
}

export default MemoTagList;
