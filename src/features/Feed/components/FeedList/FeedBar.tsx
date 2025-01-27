'use client';

import React, { useState } from 'react';
import { ArrowIcon, ChatIcon } from 'public/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { runWhenLoggedIn } from '@/utils/runWhenLoggedIn';
import LikeButton from '@/components/Button/LikeButton';
import { GetMemoRes, GetReviewRes } from '@frolog/frolog-api';
import { useRouter } from 'next/navigation';
import { AddBookToWell } from '@/features/Book';
import { isGetMemoRes } from '../../utils/typeGuard';

interface Props {
  /** 피드 데이터 객체 */
  feedData: GetReviewRes | GetMemoRes;
  /** 좋아요 핸들러 */
  onClickLike: () => void;
  /** 댓글 클릭 핸들러 */
  onClickComment: () => void;
}

/** 피드 아이템 중 댓글, 좋아요, 우물에 담기 등이 포함된 하단 바 */
function FeedBar({ feedData, onClickLike, onClickComment }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='flex w-full items-center justify-between rounded-b-[20px] border-t border-t-gray-400 bg-white px-page py-[12px]'>
        <div className='flex gap-[20px]'>
          <LikeButton
            isLiked={feedData.like ?? false}
            likeCount={feedData.like_count || 0}
            onClickLike={() => runWhenLoggedIn(onClickLike, 'feed')}
          />
          <motion.button
            whileTap={{ scale: 1.1 }}
            type='button'
            className='flex items-center gap-[4px]'
            onClick={() =>
              runWhenLoggedIn(() => {
                onClickComment();
                router.push(
                  `/feed/${feedData.id}/comments?type=${isGetMemoRes(feedData) ? 'memo' : 'review'}`
                );
              }, 'feed')
            }
          >
            <ChatIcon />
            <span className='text-body-md text-gray-600'>
              {feedData.comment_count || 0}
            </span>
          </motion.button>
        </div>
        <motion.button
          type='button'
          whileTap={{ scale: 1.1 }}
          onClick={() =>
            runWhenLoggedIn(() => {
              setOpen(true);
            }, 'feed')
          }
          className='flex items-center gap-[4px] text-body-md text-main'
        >
          나도 읽어볼래요 <ArrowIcon fill='#00CE4C' width={24} height={24} />
        </motion.button>
      </div>
      <AnimatePresence>
        {open && (
          <AddBookToWell
            bookId={feedData.isbn}
            closeSheet={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default FeedBar;
