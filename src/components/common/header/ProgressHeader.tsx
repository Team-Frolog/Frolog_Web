'use client';

import { ICONS } from '@/constants/icons';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useStepActions, useTestStep } from '@/store/stepStore';

function ProgressHeader() {
  const router = useRouter();
  const testStep = useTestStep();
  const { moveTestStep } = useStepActions();
  const percentage = (100 / 8) * testStep;

  const handleClickBack = () => {
    if (testStep === 1) {
      router.back();
    } else {
      moveTestStep(-1);
    }
  };

  return (
    <div className='block w-full pb-0'>
      <button
        type='button'
        className='m-[24px] cursor-pointer'
        onClick={handleClickBack}
      >
        <Image
          src={ICONS.common.back.back_600}
          alt='backBtn'
          width={12}
          height={20}
          priority
        />
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
