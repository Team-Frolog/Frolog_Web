/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useStackMotionStore from '@/store/stackMotionStore';
import { staggerItemVariants } from '@/styles/variants/variants';
import { useRouter } from 'next/navigation';
import { GetWellItemRes } from '@frolog/frolog-api';
import Wave from './Wave';

interface Props {
  wellBook: GetWellItemRes;
  wellId: string;
  isLastItem: boolean;
  zIndex: number;
  startLoading: () => void;
}

function WellItem({
  wellId,
  wellBook,
  isLastItem,
  zIndex,
  startLoading,
}: Props) {
  const router = useRouter();
  const {
    newReviewId,
    actions: { setNewReviewId },
  } = useStackMotionStore();
  const { id, status, title, page, category, isbn, memo_cnt } = wellBook;
  const height = page > 550 ? page * 0.1 : 55;
  const isReading = status === 'reading';

  useEffect(() => {
    return () => {
      setNewReviewId(null);
    };
  }, []);

  return (
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
        newReviewId === id && isLastItem ? staggerItemVariants : undefined
      }
      style={{ zIndex }}
      className='flex h-fit w-full'
    >
      <Wave
        title={title}
        category={category}
        height={height}
        isReading={isReading}
        hasMemo={memo_cnt > 0}
      />
    </motion.div>
  );
}

export default WellItem;
