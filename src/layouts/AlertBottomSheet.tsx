'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useClickOutside } from '@/hooks/popup/useClickOutside';
import { usePopUpActions } from '@/store/popUpStore';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import { AlertSheet } from '@/data/ui/bottomSheet';
import { useScrollFreeze } from '@/hooks/gesture/useScrollFreeze';
import Button from '../components/Button/Button';
import Portal from './Portal';
import BackDrop from './BackDrop';

interface Props {
  sheetData: AlertSheet;
  children: React.ReactNode;
  onClick?: () => void;
}

function AlertBottomSheet({ sheetData, children, onClick }: Props) {
  useScrollFreeze();
  const { getTitle, type, stateType, buttonText, extraButtonText } = sheetData;
  const { changePopUpState } = usePopUpActions();
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, () => changePopUpState(stateType, false));

  return (
    <Portal>
      <BackDrop align='end'>
        <motion.div
          ref={ref}
          initial={{ y: '120%' }}
          animate={{ y: '0%' }}
          exit={{ y: '120%' }}
          transition={{ duration: 0.3 }}
          className='flex h-fit w-full flex-col items-center gap-[40px] rounded-t-[20px] bg-white px-[24px] py-[40px] pb-0 text-gray-800'
        >
          <Image
            src={
              type === 'error'
                ? IMAGES.frog.sheet.error
                : IMAGES.frog.sheet.book
            }
            alt='error frog'
            width={191}
            height={70}
            className='absolute inset-x-0 -top-[58px] mx-auto'
          />
          <div className='flex w-full flex-col items-center gap-[12px]'>
            <h2 className='text-center text-h_md_bold'>{getTitle()}</h2>
            {children}
          </div>
          {buttonText && onClick && (
            <div className='flex w-full flex-col items-center gap-[20px] pb-[40px]'>
              <Button
                type='button'
                theme={type}
                onClick={() => {
                  onClick();
                  changePopUpState(stateType, false);
                }}
              >
                {buttonText}
              </Button>
              {extraButtonText && (
                <button
                  type='button'
                  onClick={() => changePopUpState(stateType, false)}
                  className='text-body_lg_bold text-gray-600'
                >
                  {extraButtonText}
                </button>
              )}
            </div>
          )}
        </motion.div>
      </BackDrop>
    </Portal>
  );
}

export default AlertBottomSheet;
