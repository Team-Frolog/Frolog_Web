/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useStackMotionStore from '@/store/stackMotionStore';
import { staggerItemVariants } from '@/styles/variants/variants';
import { useRouter } from 'next/navigation';
import { GetWellItemRes } from '@frolog/frolog-api';
import { CATEGORY } from '@/constants/category';
// import WellBubble from 'public/images/well/well-bubble.svg';
import WellBubble from 'public/images/christmas/well/christmas-reading.svg';
import MemoLeaf from './MemoLeaf';

interface Props {
  wellBook: GetWellItemRes;
  wellId: string;
  isTopItem: boolean;
  zIndex: number;
  startLoading: () => void;
  isLastItem?: boolean;
  setTarget?: React.Dispatch<
    React.SetStateAction<HTMLDivElement | null | undefined>
  >;
}

function WellItem({
  wellId,
  wellBook,
  isTopItem,
  zIndex,
  isLastItem,
  setTarget,
  startLoading,
}: Props) {
  const router = useRouter();
  const {
    newReviewId,
    actions: { setNewReviewId },
  } = useStackMotionStore();
  const { id, status, title, page, category, isbn, memo_cnt } = wellBook;
  const height = page > 400 ? page * 0.15 : 55;
  const isReading = status === 'reading';
  const hasMemo = memo_cnt > 0;

  useEffect(() => {
    return () => {
      if (newReviewId === id) {
        setNewReviewId(null);
      }
    };
  }, []);

  return (
    <div className='relative flex w-full'>
      <motion.div
        whileTap={{ y: -10 }}
        onClick={() => {
          startLoading();
          router.push(
            isReading
              ? `${wellId}/book/${isbn}/memo`
              : `${wellId}/book/${isbn}/review`
          );
        }}
        variants={
          newReviewId === id && isTopItem ? staggerItemVariants : undefined
        }
        style={{ zIndex, height }}
        // className={`flex h-fit w-full bg-category-bg-${category} relative z-auto box-border justify-center pt-[12px]`}
        className={`flex h-fit w-full bg-category-bg-${category} relative z-auto box-border justify-center pt-[18px]`}
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
          // className='absolute -left-[0px] -top-[12px] h-[12px] w-full'  - 기존 클래스
          className='absolute -left-[0px] -top-[12px] h-[67px] w-full'
          loading='eager'
        />
        {isReading && (
          <WellBubble
            fill={CATEGORY[category].band}
            className='absolute left-[24px] top-[8px]'
          />
        )}
        {hasMemo && (
          <MemoLeaf
            bg={CATEGORY[category].text}
            line={CATEGORY[category].bg}
            isOtherSkin
          />
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
