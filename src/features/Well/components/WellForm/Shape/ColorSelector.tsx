import React, { useRef } from 'react';
import { CATEGORY } from '@/constants/category';
import { useFormContext } from 'react-hook-form';
import { motion } from 'framer-motion';
import ColorButton from './ColorButton';

function ColorSelector() {
  const { watch, setValue } = useFormContext();
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const motionDivRef = useRef<HTMLDivElement | null>(null);
  const categoryKeys = Object.keys(CATEGORY);

  return (
    <div ref={sliderRef} className='flex w-full overflow-hidden py-[18px]'>
      <motion.div
        ref={motionDivRef}
        drag='x'
        dragConstraints={sliderRef}
        dragElastic={0.2}
        className='flex w-fit gap-[14px] px-[16px]'
      >
        {categoryKeys.map((key) => (
          <ColorButton
            key={key}
            id={key}
            isSelected={watch('color') === key}
            onClick={() => setValue('color', key, { shouldDirty: true })}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default ColorSelector;
