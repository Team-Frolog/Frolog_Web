'use client';

import React from 'react';
import { ArrowIcon, ChatIcon } from 'public/icons';
import { motion } from 'framer-motion';
import { runWhenLoggedIn } from '@/utils/runWhenLoggedIn';
import LikeButton from '@/components/Button/LikeButton';
import { GetMemoRes, GetReviewRes } from '@frolog/frolog-api';
import { useRouter } from 'next/navigation';
import { isGetMemoRes } from '../../utils/typeGuard';

interface Props {
  /** 피드 데이터 객체 */
  feedData: GetReviewRes | GetMemoRes;
  /** 좋아요 핸들러 */
  onClickLike: () => void;
  /** 댓글 클릭 핸들러 */
  onClickComment: () => void;
  /** 스크롤 저장 핸들러  */
  onSaveScroll: () => void;
}

/** 피드 아이템 중 댓글, 좋아요, 우물에 담기 등이 포함된 하단 바 */
function FeedBar({
  feedData,
  onClickLike,
  onClickComment,
  onSaveScroll,
}: Props) {
  const router = useRouter();

  return (
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
            onSaveScroll();
            router.push(`/book/${feedData.isbn}`);
          }, 'feed')
        }
        className='flex items-center gap-[4px] text-body-md text-gray-600'
      >
        우물에 담기 <ArrowIcon fill='#727384' width={24} height={24} />
      </motion.button>
    </div>
  );
}

export default FeedBar;
