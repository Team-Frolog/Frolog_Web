import React from 'react';
import { motion } from 'framer-motion';
import { HeartFilledIcon, HeartIcon } from 'public/icons';

interface Props {
  /** 좋아요 여부 */
  isLiked: boolean;
  /** 총 좋아요 개수 */
  likeCount: number;
  onClickLike: () => void;
}

/** 좋아요 하트 토글 버튼
 * - isLiked 여부에 따라 하트 아이콘을 변경합니다.
 */
function LikeButton({ isLiked, likeCount, onClickLike }: Props) {
  return (
    <motion.button
      whileTap={{ scale: 1.1 }}
      type='button'
      className='flex w-max min-w-[38px] items-center gap-[4px]'
      onClick={onClickLike}
    >
      {isLiked ? <HeartFilledIcon /> : <HeartIcon />}
      <span className='text-body-md text-gray-600'>{likeCount}</span>
    </motion.button>
  );
}

export default LikeButton;
