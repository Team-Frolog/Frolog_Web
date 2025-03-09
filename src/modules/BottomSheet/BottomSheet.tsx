'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useClickOutside } from '@/hooks/popup/useClickOutside';
import Image from 'next/image';
import { sheetData } from '@/data/ui/bottomSheet';
import { SHEET_FROG } from '@/constants/frogs';
import { useScrollFreeze } from '@/hooks/gesture/useScrollFreeze';
import Button from '@/components/Button/Button';
import BackDrop from '@/layouts/BackDrop';
import { bottomSheet, BottomSheetProps } from '.';

/** 바텀시트 컴포넌트 */
function BottomSheet({
  sheetKey,
  children,
  onClick,
  onClickSubButton,
  onClose,
  titleProp,
}: BottomSheetProps) {
  useScrollFreeze();
  const { getTitle, type, frog, buttonText, extraButtonText, description } =
    sheetData[sheetKey];

  const defaultFrog = type === 'error' ? SHEET_FROG.error : SHEET_FROG.normal;

  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(
    ref,
    onClose ? () => onClose() : () => bottomSheet.closeSheet()
  );

  return (
    <BackDrop align='end'>
      <motion.div
        ref={ref}
        initial={{ y: '120%' }}
        animate={{ y: '0%' }}
        exit={{ y: '120%' }}
        transition={{ duration: 0.3 }}
        className='safe-bottom relative flex h-fit w-full flex-col items-center gap-[40px] rounded-t-[20px] bg-white px-[24px] pb-[20px] pt-[40px] text-gray-800'
        style={{ paddingTop: '40px', gap: '40px' }}
      >
        <Image
          src={frog || defaultFrog}
          alt='frog'
          width={191}
          height={70}
          className='absolute inset-x-0 mx-auto'
          style={{ top: '-55px' }}
        />
        <div className='flex-col-center w-full gap-[12px]'>
          <h2 className='text-center text-title-xl-bold'>
            {getTitle(titleProp)}
          </h2>
          {description && (
            <p className='text-center text-body-lg'>{description()}</p>
          )}
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
