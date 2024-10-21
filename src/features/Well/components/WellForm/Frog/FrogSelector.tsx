import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { motion, useAnimationControls } from 'framer-motion';
import { ExpandIcon } from 'public/icons';
import { useFrogs } from '../../../hooks/useFrogs';
import FrogCharacter from './FrogCharacter';

interface Props {
  userId: string;
}

function FrogSelector({ userId }: Props) {
  const { watch, setValue } = useFormContext();
  const { frogs } = useFrogs(userId);
  const controls = useAnimationControls();
  const [isExpanded, setIsExpanded] = useState(false);

  const isNoExpansion = frogs ? frogs.length < 3 : true;

  useEffect(() => {
    if (isExpanded || isNoExpansion) {
      controls.start({ height: 'auto' });
    } else {
      controls.start({ height: '280px' });
    }
  }, [isExpanded, controls, isNoExpansion]);

  if (!frogs) return <></>;

  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <h6 className='text-body-md text-gray-700'>내 캐릭터</h6>
      <motion.div
        initial={{ height: isExpanded || isNoExpansion ? 'auto' : '280px' }}
        animate={controls}
        transition={{ duration: 0.3 }}
        className='relative flex flex-wrap gap-[9px] overflow-hidden'
      >
        {!isNoExpansion && (
          <div
            className={`absolute bottom-0 left-0 h-[90px] w-full transition-all duration-300 ${isExpanded ? '-z-10 opacity-100' : 'z-10 opacity-100'}`}
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 95.41%)',
            }}
          />
        )}
        {frogs.map((frog) => (
          <FrogCharacter
            key={frog.id}
            data={frog}
            isSelected={frog.id === watch('frog')}
            onClick={() => setValue('frog', frog.id, { shouldDirty: true })}
          />
        ))}
      </motion.div>
      {!isNoExpansion && (
        <button
          type='button'
          className='flex w-full justify-center bg-white'
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <ExpandIcon
            className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      )}
    </div>
  );
}

export default FrogSelector;
