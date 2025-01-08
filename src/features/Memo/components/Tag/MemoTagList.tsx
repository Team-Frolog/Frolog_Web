'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MemoTag from './MemoTag';

/** deprecated */
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
    <div ref={sliderRef} className='w-full overflow-hidden'>
      <motion.div
        ref={motionDivRef}
        drag={drag}
        dragConstraints={sliderRef}
        dragElastic={0.2}
        className='flex w-fit gap-[8px] px-[24px]'
      >
        <MemoTag type='phrase' />
        <MemoTag type='thought' />
      </motion.div>
    </div>
  );
}

export default MemoTagList;
