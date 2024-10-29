/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { staggerItemVariants } from '@/styles/variants/variants';
import useStackMotionStore from '@/store/stackMotionStore';
import { useRouter } from 'next/navigation';
import { MemoBookmarkIcon } from 'public/icons';
import { GetWellItemRes } from '@frolog/frolog-api';
import ReadingBook from '../Well/Book/ReadingBook';
import ReadBook from '../Well/Book/ReadBook';
import { getMargin } from '../../utils/getMargin';

interface Props {
  wellBook: GetWellItemRes;
  wellId: string;
}

function WellBook({ wellId, wellBook }: Props) {
  const router = useRouter();
  const {
    newReviewId,
    actions: { setNewReviewId },
  } = useStackMotionStore();
  const { status, memo_cnt, title, page, category, isbn } = wellBook;
  const bookHeight = page > 420 ? page * 0.1 : 42;
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
      variants={newReviewId === wellBook.id ? staggerItemVariants : undefined}
      className='flex w-[80%] items-center justify-center'
      style={{ margin: getMargin() }}
    >
      {isReading ? (
        <ReadingBook
          title={title}
          category={category}
          bookHeight={bookHeight}
        />
      ) : (
        <ReadBook title={title} category={category} bookHeight={bookHeight} />
      )}
      {memo_cnt > 0 && <MemoBookmarkIcon />}
    </motion.div>
  );
}

export default WellBook;
