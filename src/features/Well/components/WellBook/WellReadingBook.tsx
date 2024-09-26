import React from 'react';
import { motion } from 'framer-motion';
import { staggerItemVariants } from '@/styles/variants/variants';
import { useNewReviewId } from '@/store/stackMotionStore';
import { useRouter } from 'next/navigation';
import { MemoBookmarkIcon } from 'public/icons';
import { useSession } from 'next-auth/react';

interface Props {
  userId?: string;
}

function WellReadingBook({ userId }: Props) {
  const router = useRouter();
  const { data: session } = useSession();
  const newReviewId = useNewReviewId();

  return (
    <motion.div
      onClick={() =>
        router.push(
          `${userId || session?.user.id}/well-book/9791193154250/review`
        )
      }
      variants={newReviewId ? staggerItemVariants : undefined} // 이 책의 id와 같으면 스택 실행
      className='flex w-[85%] items-center'
    >
      <div className='relative flex flex-1 justify-center rounded-l-[100px] border-[8px] border-r-0 border-category-bg-religion bg-white px-[24px] py-[5px]'>
        <span className='text-overflow-hidden w-[82%] text-center text-body-sm-bold text-gray-700'>
          메리와 메리
        </span>
      </div>
      <MemoBookmarkIcon />
    </motion.div>
  );
}

export default WellReadingBook;
