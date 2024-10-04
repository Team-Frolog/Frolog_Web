import React from 'react';
import { motion } from 'framer-motion';
import { HeartFilledIcon, HeartIcon } from 'public/icons';

interface Props {
  isLiked: boolean;
  likeCount: number;
  onClickLike: () => void;
}

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
