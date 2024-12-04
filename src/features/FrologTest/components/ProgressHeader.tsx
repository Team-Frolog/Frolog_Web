'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useStep, useStepActions } from '@/store/stepStore';
import { STORAGE_KEY } from '@/constants/storage';
import { BackIcon } from 'public/icons';

function ProgressHeader() {
  const router = useRouter();
  const step = useStep();
  const { moveStep } = useStepActions();
  const percentage = (100 / 8) * step;

  const handleClickBack = () => {
    if (step === 1) {
      sessionStorage.removeItem(STORAGE_KEY.TEST_ANSWER_KEY);
      router.back();
    } else {
      moveStep(-1);
    }
  };

  return (
    <div className='block w-full bg-white pb-0'>
      <button
        type='button'
        className='m-[24px] cursor-pointer'
        onClick={handleClickBack}
      >
        <BackIcon fill='#B3B6C5' />
      </button>
      <div className='h-[4px] w-full bg-gray-300'>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          className='h-full bg-main'
        />
      </div>
    </div>
  );
}

export default ProgressHeader;
