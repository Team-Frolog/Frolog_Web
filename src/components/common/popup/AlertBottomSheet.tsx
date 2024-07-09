'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { modalBackgroundVariants } from '@/styles/variants/variants';
import { useClickOutside } from '@/hooks/popup/useClickOutside';
import { usePopUpActions } from '@/store/popUpStore';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import Button from '../button/Button';

interface Props {
  title: React.ReactNode;
  type: 'normal' | 'error';
  children: React.ReactNode;
  buttonText?: string;
  extraButtonText?: string;
  onClick?: () => void;
}

function AlertBottomSheet({
  title,
  type,
  children,
  buttonText,
  extraButtonText,
  onClick,
}: Props) {
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
        initial={{ y: '120%' }}
        animate={{ y: '0%' }}
        exit={{ y: '120%' }}
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
          <h2 className='text-center text-h_md_bold'>{title}</h2>
          {children}
        </div>
        {buttonText && onClick && (
          <div className='flex w-full flex-col items-center gap-[20px]'>
            <Button
              type='button'
              theme={type}
              onClick={() => {
                changePopUpState('isOpenAlertSheet', false);
                onClick();
              }}
            >
              {buttonText}
            </Button>
            {extraButtonText && (
              <button
                type='button'
                onClick={() => changePopUpState('isOpenAlertSheet', false)}
                className='text-body_lg_bold text-gray-600'
              >
                {extraButtonText}
              </button>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default AlertBottomSheet;
