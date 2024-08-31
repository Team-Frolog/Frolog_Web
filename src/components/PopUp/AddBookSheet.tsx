import { sheetData } from '@/data/ui/bottomSheet';
import AlertBottomSheet from '@/layouts/AlertBottomSheet';
import { useAlertSheetState } from '@/store/popUpStore';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { IMAGES } from '@/constants/images';

function AddBookSheet() {
  const isOpenAlertSheet = useAlertSheetState();

  return (
    <AnimatePresence>
      {isOpenAlertSheet && (
        <AlertBottomSheet sheetData={sheetData.add_book}>
          <div className='text-title-xl-bold flex w-full flex-col gap-[20px] pb-[32px] pt-[28px] text-gray-800'>
            <button
              type='button'
              className='flex h-[95px] items-center justify-between gap-[20px] rounded-[12px] bg-gray-200 pl-[30px] pr-[10px]'
            >
              <span>다 읽었어요</span>
              <div className='flex h-full items-end'>
                <Image
                  src={IMAGES.frog.add.done}
                  alt='done'
                  width={127}
                  height={61}
                />
              </div>
            </button>
            <button
              type='button'
              className='flex h-[95px] items-center justify-between gap-[20px] rounded-[12px] bg-gray-200 pl-[30px] pr-[10px]'
            >
              <span>읽는 중이에요</span>
              <div className='flex h-full items-end'>
                <Image
                  src={IMAGES.frog.add.reading}
                  alt='reading'
                  width={127}
                  height={61}
                />
              </div>
            </button>
          </div>
        </AlertBottomSheet>
      )}
    </AnimatePresence>
  );
}

export default AddBookSheet;
