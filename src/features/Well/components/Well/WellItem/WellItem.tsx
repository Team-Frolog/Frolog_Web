'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useNewItemStore from '@/store/newItemStore';
import { WellItemMoverIcon } from 'public/icons';
import { staggerItemVariants } from '@/styles/variants/variants';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { STORAGE_KEY } from '@/constants/storage';
import { GetWellItemRes } from '@frolog/frolog-api';
import { CATEGORY } from '@/constants/category';
import WellBubble from 'public/images/well/well-bubble.svg';
import MemoLeaf from './MemoLeaf';

interface Props {
  wellBook: GetWellItemRes;
  wellId: string;
  isTopItem: boolean;
  index: number;
  startLoading: () => void;
  isLastItem?: boolean;
  setTarget?: React.Dispatch<
    React.SetStateAction<HTMLDivElement | null | undefined>
  >;
  isMovable?: boolean;
  draggableHandle: any;
  isDragging?: boolean;
}

function WellItem({
  wellId,
  wellBook,
  isTopItem,
  index,
  isLastItem,
  setTarget,
  startLoading,
  draggableHandle,
  isMovable = false,
  isDragging = false,
}: Props) {
  const { navigate } = useCustomRouter('well');
  const { newItemId, setNewItemId } = useNewItemStore();
  const { id, status, title, page, category, isbn, memo_cnt } = wellBook;
  const height = page > 400 ? page * 0.15 : 55;
  const isReading = status === 'reading';
  const hasMemo = memo_cnt > 0;

  useEffect(() => {
    if (newItemId === id) {
      setNewItemId(null);
    }
  }, []);

  return (
    <div
      className='relative flex w-full'
      style={{
        boxShadow: isDragging ? '0px 4px 10px 0px rgba(0, 0, 0, 0.25)' : '',
      }}
    >
      <motion.div
        whileTap={{ y: -10 }}
        onClick={() => {
          startLoading();
          sessionStorage.setItem(STORAGE_KEY.selectedWellItemId, id);
          navigate(
            isReading
              ? `${wellId}/book/${isbn}/memo`
              : `${wellId}/book/${isbn}/review`
          );
        }}
        variants={
          newItemId === id && isTopItem ? staggerItemVariants : undefined
        }
        style={{ zIndex: index + 1, height }}
        className={`flex h-fit w-full bg-category-bg-${category} relative z-auto box-border justify-center pt-[12px]`}
      >
        {isLastItem && (
          <div
            ref={setTarget}
            id='observer'
            className='absolute -top-[10px] h-[10px] w-full'
          />
        )}
        <Image
          src={CATEGORY[category].wave}
          alt='wave'
          width={392}
          height={12}
          className='absolute -left-[0px] -top-[12px] h-[12px] w-full'
          loading='eager'
        />
        {isReading && (
          <WellBubble
            fill={CATEGORY[category].band}
            className='absolute left-[24px] top-[8px]'
          />
        )}
        {isMovable && (
          <button
            {...draggableHandle}
            type='button'
            onPointerDown={(e) => {
              e.stopPropagation();
            }}
            className='absolute right-[24px] top-[8px]'
          >
            <WellItemMoverIcon />
          </button>
        )}
        {!isMovable && hasMemo && (
          <MemoLeaf bg={CATEGORY[category].text} line={CATEGORY[category].bg} />
        )}
        <span
          className={`text-category-text-${category} truncate text-center text-body-sm-bold ${isReading || hasMemo ? 'w-[65%]' : 'w-[90%]'}`}
        >
          {title}
        </span>
      </motion.div>
      <div
        className={`absolute h-[20px] w-full bg-category-bg-${category} bottom-0 left-0 z-0`}
      />
    </div>
  );
}

export default WellItem;
