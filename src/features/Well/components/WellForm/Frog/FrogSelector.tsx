import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { motion, useAnimationControls } from 'framer-motion';
import { ExpandIcon } from 'public/icons';
import FrogCharacter from './FrogCharacter';

function FrogSelector() {
  const { watch, setValue } = useFormContext();
  const controls = useAnimationControls();
  const [isExpanded, setIsExpanded] = useState(false);

  const dummy = [
    { id: 1, name: '개구리 1', isNew: true },
    { id: 2, name: '개구리 2', isNew: false },
    { id: 3, name: '개구리 3', isNew: false },
    { id: 4, name: '개구리 4', isNew: false },
    { id: 5, name: '개구리 5', isNew: false },
    { id: 6, name: '개구리 6', isNew: false },
  ];

  useEffect(() => {
    if (isExpanded) {
      controls.start({ height: 'auto' });
    } else {
      controls.start({ height: '280px' });
    }
  }, [isExpanded, controls]);

  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <h6 className='text-body_md text-gray-700'>내 캐릭터</h6>
      <motion.div
        initial={{ height: isExpanded ? 'auto' : '280px' }}
        animate={controls}
        transition={{ duration: 0.3 }}
        className='relative flex flex-wrap gap-[9px] overflow-hidden'
      >
        <div
          className={`absolute bottom-0 left-0 h-[90px] w-full transition-all duration-300 ${isExpanded ? '-z-10 opacity-100' : 'z-10 opacity-100'}`}
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 95.41%)',
          }}
        />
        {dummy.map((item) => (
          <FrogCharacter
            key={item.id}
            data={item}
            isSelected={item.id === watch('frogId')}
            onClick={() => setValue('frogId', item.id)}
          />
        ))}
      </motion.div>
      <button
        type='button'
        className='flex w-full justify-center bg-white'
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <ExpandIcon
          className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
    </div>
  );
}

export default FrogSelector;
