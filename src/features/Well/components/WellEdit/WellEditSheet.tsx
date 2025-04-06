import { IMAGES } from '@/constants/images';
import BottomSheet from '@/modules/BottomSheet/BottomSheet';
import { getPath } from '@/utils/getPath';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Portal from '@/layouts/Portal';

interface Props {
  isOpen: boolean;
  closeSheet: () => void;
  userId?: string;
  wellId?: string;
}

function WellEditSheet({ isOpen, closeSheet, userId, wellId }: Props) {
  return (
    <AnimatePresence>
      {isOpen && userId && wellId && (
        <Portal>
          <BottomSheet sheetKey='edit_well' onClose={closeSheet}>
            <div className='flex w-full flex-col gap-[20px] pb-[32px] pt-[28px] text-title-xl-bold text-gray-800'>
              <Link
                href={getPath.wellEdit(userId, wellId)}
                onClick={closeSheet}
                className='flex h-[95px] items-center justify-between gap-[20px] rounded-[12px] bg-gray-200 pl-[30px] pr-[10px]'
              >
                <span>우물 수정</span>
                <div className='flex h-full items-end'>
                  <Image
                    src={IMAGES.frog.edit_well_frog}
                    alt='done'
                    width={127}
                    height={61}
                  />
                </div>
              </Link>
              <Link
                onClick={closeSheet}
                href={`${getPath.wellDetail(userId, wellId)}?mode=movable`}
                className='flex h-[95px] items-center justify-between gap-[20px] rounded-[12px] bg-gray-200 pl-[30px] pr-[10px]'
              >
                <span>도서 순서 수정</span>
                <div className='flex h-full items-end'>
                  <Image
                    src={IMAGES.frog.add.done}
                    alt='reading'
                    width={127}
                    height={61}
                  />
                </div>
              </Link>
            </div>
          </BottomSheet>
        </Portal>
      )}
    </AnimatePresence>
  );
}

export default WellEditSheet;
