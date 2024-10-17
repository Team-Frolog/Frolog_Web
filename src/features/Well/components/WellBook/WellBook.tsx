import React from 'react';
import { motion } from 'framer-motion';
import { staggerItemVariants } from '@/styles/variants/variants';
import { useNewReviewId } from '@/store/stackMotionStore';
import { useRouter } from 'next/navigation';
import { MemoBookmarkIcon } from 'public/icons';
import { GetWellItemRes } from '@frolog/frolog-api';

interface Props {
  userId?: string;
  wellBook: GetWellItemRes;
}

function WellBook({ userId, wellBook }: Props) {
  const router = useRouter();
  const newReviewId = useNewReviewId();
  const { status, memo_cnt, title, page, category, isbn, review_cnt } =
    wellBook;
  const bookHeight = page >= 400 ? page * 0.12 : 42;

  return (
    <motion.div
      onClick={() =>
        router.push(
          review_cnt
            ? `${userId}/well-book/${isbn}/review`
            : `${userId}/well-book/${isbn}/memo`
        )
      }
      variants={newReviewId ? staggerItemVariants : undefined} // 이 책의 id와 같으면 스택 실행
      className='flex w-[85%] items-center'
    >
      {status === 'reading' ? (
        <div
          style={{ height: bookHeight }}
          className={`reading-book border-category-bg-${category}`}
        >
          <span className='reading-book-text'>{title}</span>
        </div>
      ) : (
        <div
          style={{ height: bookHeight }}
          className={`read-book bg-category-bg-${category}`}
        >
          <div className={`read-book-band bg-category-band-${category}`} />
          <span className='read-book-text'>{title}</span>
        </div>
      )}
      {memo_cnt > 0 && <MemoBookmarkIcon />}
    </motion.div>
  );
}

export default WellBook;
