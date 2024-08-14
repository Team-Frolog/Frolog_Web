import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ImgPlusIcon } from 'public/icons';

function ImageSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const motionDivRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={sliderRef} className='flex w-full overflow-hidden'>
      <motion.div
        ref={motionDivRef}
        drag='x'
        dragConstraints={sliderRef}
        dragElastic={0.2}
        className='flex w-fit gap-[20px] px-[24px]'
      >
        <div className='flex h-[290px] w-[290px] items-center justify-center rounded-[8px] bg-gray-200'>
          <ImgPlusIcon />
        </div>
        <div className='flex h-[290px] w-[290px] items-center justify-center rounded-[8px] bg-gray-200'>
          <ImgPlusIcon />
        </div>
      </motion.div>
    </div>
  );
}

export default ImageSlider;
