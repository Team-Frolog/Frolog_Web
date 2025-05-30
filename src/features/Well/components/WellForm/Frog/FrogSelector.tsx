import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { motion, useAnimationControls } from 'framer-motion';
import { ExpandIcon } from 'public/icons';
import FrologItem from '@/components/FrologItem/FrologItem';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import { GetStoreItemRes } from '@frolog/frolog-api';

interface Props {
  /** 내 개구리 리스트 */
  myFrogList: GetStoreItemRes[];
}

/** 개구리 캐릭터 선택 컴포넌트 */
function FrogSelector({ myFrogList }: Props) {
  const { watch, setValue } = useFormContext();
  const controls = useAnimationControls();
  const [isExpanded, setIsExpanded] = useState(false);
  const isNoExpansion = myFrogList ? myFrogList.length <= 3 : true;

  useEffect(() => {
    if (isExpanded || isNoExpansion) {
      controls.start({ height: 'auto' });
    } else {
      controls.start({ height: '280px' });
    }
  }, [isExpanded, controls, isNoExpansion]);

  if (!myFrogList) return null;

  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <h6 className='text-body-md text-gray-700'>내 캐릭터</h6>
      <motion.div
        initial={{ height: isExpanded || isNoExpansion ? 'auto' : '280px' }}
        animate={controls}
        transition={{ duration: 0.3 }}
        className='relative grid grid-cols-3 gap-[9px] overflow-hidden'
      >
        <WithConditionalRendering condition={!isNoExpansion}>
          <div
            className={`absolute bottom-0 left-0 h-[90px] w-full transition-all duration-300 ${isExpanded ? '-z-10 opacity-100' : 'z-10 opacity-100'}`}
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 95.41%)',
            }}
          />
        </WithConditionalRendering>

        {myFrogList.map((frog) => (
          <FrologItem
            key={frog.key}
            type='well'
            item={frog}
            isSelected={frog.key === watch('frog')}
            onClick={() => setValue('frog', frog.key, { shouldDirty: true })}
          />
        ))}
      </motion.div>

      <WithConditionalRendering condition={!isNoExpansion}>
        <button
          type='button'
          className='flex w-full justify-center bg-white'
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <ExpandIcon
            className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </WithConditionalRendering>
    </div>
  );
}

export default FrogSelector;
