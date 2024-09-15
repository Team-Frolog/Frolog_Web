'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useClickOutside } from '@/hooks/popup/useClickOutside';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import { useScrollFreeze } from '@/hooks/gesture/useScrollFreeze';
import Button from '@/components/Button/Button';
import BackDrop from '@/layouts/BackDrop';
import bottomSheet, { BottomSheetProps } from '.';

function BottomSheet({
  sheetData,
  children,
  onClick,
  onClickSubButton,
}: BottomSheetProps) {
  useScrollFreeze();

  const defaultFrog =
    sheetData.type === 'error'
      ? IMAGES.frog.sheet.error
      : IMAGES.frog.sheet.normal;

  const { getTitle, type, buttonText, extraButtonText, description } =
    sheetData;
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, () => bottomSheet.closeSheet());

  return (
    <BackDrop align='end'>
      <motion.div
        ref={ref}
        initial={{ y: '120%' }}
        animate={{ y: '0%' }}
        exit={{ y: '120%' }}
        transition={{ duration: 0.3 }}
        className='relative flex h-fit w-full flex-col items-center gap-[40px] rounded-t-[20px] bg-white px-[24px] py-[40px] pb-0 text-gray-800'
        style={{ paddingTop: '40px', gap: '40px' }}
      >
        <Image
          src={sheetData.frog || defaultFrog}
          alt='frog'
          width={191}
          height={70}
          className='absolute inset-x-0 mx-auto'
          style={{ top: '-55px' }}
        />
        <div className='flex-col-center w-full gap-[12px]'>
          <h2 className='text-center text-title-xl-bold'>{getTitle()}</h2>
          {description && <p className='text-body-lg'>{description()}</p>}
          {children}
        </div>
        {buttonText && (
          <div className='flex-col-center w-full gap-[20px] pb-[40px]'>
            <Button
              type='button'
              theme={type}
              onClick={() => {
                if (onClick) {
                  onClick();
                }
                bottomSheet.closeSheet();
              }}
            >
              {buttonText}
            </Button>
            {extraButtonText && (
              <button
                type='button'
                onClick={() => {
                  bottomSheet.closeSheet();
                  if (onClickSubButton) {
                    onClickSubButton();
                  }
                }}
                className='text-body-lg-bold text-gray-600'
              >
                {extraButtonText}
              </button>
            )}
          </div>
        )}
      </motion.div>
    </BackDrop>
  );
}

export default BottomSheet;
