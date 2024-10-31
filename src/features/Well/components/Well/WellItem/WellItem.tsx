/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { staggerItemVariants } from '@/styles/variants/variants';
import useStackMotionStore from '@/store/stackMotionStore';
import { useRouter } from 'next/navigation';
import { GetWellItemRes } from '@frolog/frolog-api';
import Wave from './Wave';

interface Props {
  wellBook: GetWellItemRes;
  wellId: string;
  isLastItem: boolean;
}

function WellItem({ wellId, wellBook, isLastItem }: Props) {
  const router = useRouter();
  const {
    newReviewId,
    actions: { setNewReviewId },
  } = useStackMotionStore();
  const { id, status, title, page, category, isbn } = wellBook;
  const height = page > 550 ? page * 0.1 : 55;
  const isReading = status === 'reading';

  useEffect(() => {
    return () => {
      setNewReviewId(null);
    };
  }, []);

  return (
    <motion.div
      onClick={() =>
        router.push(
          isReading
            ? `${wellId}/book/${isbn}/memo`
            : `${wellId}/book/${isbn}/review`
        )
      }
      variants={
        newReviewId === id && isLastItem ? staggerItemVariants : undefined
      }
      className='flex w-full'
    >
      <Wave title={title} category={category} height={height} />
    </motion.div>
  );
}

export default WellItem;
