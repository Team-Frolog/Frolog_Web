import React, { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { motion } from 'framer-motion';
import ColorButton from './ColorButton';

function ColorSelector() {
  const { watch, setValue } = useFormContext();
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const motionDivRef = useRef<HTMLDivElement | null>(null);

  const dummy = [
    { id: 1, color: 'novel' },
    { id: 2, color: 'novel' },
    { id: 3, color: 'novel' },
    { id: 4, color: 'novel' },
    { id: 5, color: 'novel' },
    { id: 6, color: 'novel' },
    { id: 7, color: 'novel' },
    { id: 8, color: 'novel' },
    { id: 9, color: 'novel' },
    { id: 10, color: 'novel' },
  ];

  return (
    <div ref={sliderRef} className='flex w-full overflow-hidden py-[18px]'>
      <motion.div
        ref={motionDivRef}
        drag='x'
        dragConstraints={sliderRef}
        dragElastic={0.2}
        className='flex w-fit gap-[14px] px-[16px]'
      >
        {dummy.map((item) => (
          <ColorButton
            key={item.id}
            isSelected={watch('color') === item.id}
            onClick={() => setValue('color', item.id)}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default ColorSelector;
