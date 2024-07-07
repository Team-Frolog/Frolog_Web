'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useStepActions, useTestStep } from '@/store/stepStore';
import { TEST_ANSWER_KEY } from '@/constants/storage';
import BackIcon from 'public/icons/common/back/back.svg';

function ProgressHeader() {
  const router = useRouter();
  const testStep = useTestStep();
  const { moveTestStep } = useStepActions();
  const percentage = (100 / 8) * testStep;

  const handleClickBack = () => {
    if (testStep === 1) {
      sessionStorage.removeItem(TEST_ANSWER_KEY);
      router.back();
    } else {
      moveTestStep(-1);
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
