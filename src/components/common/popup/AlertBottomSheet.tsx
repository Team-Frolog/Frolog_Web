'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { modalBackgroundVariants } from '@/styles/variants/variants';
import { useClickOutside } from '@/hooks/popup/useClickOutside';
import { usePopUpActions } from '@/store/popUpStore';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import Button from '../button/Button';

function AlertBottomSheet() {
  const { changePopUpState } = usePopUpActions();
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, () => changePopUpState('isOpenAlertSheet', false));

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div
      variants={modalBackgroundVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      className='fixed inset-x-0 left-0 top-0 z-50 mx-auto flex h-dvh w-[450px] items-end mobile:inset-0 mobile:left-0 mobile:w-full'
    >
      <motion.div
        ref={ref}
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.3 }}
        className='flex h-fit w-full flex-col items-center gap-[40px] rounded-t-[20px] bg-white px-[24px] py-[40px] text-gray-800'
      >
        <Image
          src={IMAGES.frog.sheet.error}
          alt='error frog'
          width={191}
          height={70}
          className='absolute inset-x-0 -top-[55px] mx-auto'
        />
        <div className='flex w-full flex-col items-center gap-[12px]'>
          <h2 className='text-center text-h_md_bold'>
            아직 작성중이에요
            <br />
            정말 나가시나요?
          </h2>
          <p className='text-body_lg'>이대로 나가면 내용이 저장되지 않아요</p>
        </div>
        <div className='flex w-full flex-col items-center gap-[20px]'>
          <Button type='button' theme='error'>
            나가기
          </Button>
          <button type='button' className='text-body_lg_bold text-gray-600'>
            계속 작성하기
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AlertBottomSheet;
