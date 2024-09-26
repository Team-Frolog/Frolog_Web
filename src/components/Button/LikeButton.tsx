import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartFilledIcon, HeartIcon } from 'public/icons';

interface Props {
  likeCount: number;
}

function LikeButton({ likeCount }: Props) {
  const [like, setLike] = useState(false);

  return (
    <motion.button
      whileTap={{ scale: 1.1 }}
      type='button'
      className='flex items-center gap-[4px]'
      onClick={() => setLike((prev) => !prev)}
    >
      {like ? <HeartFilledIcon /> : <HeartIcon />}
      <span className='text-body-md text-gray-600'>
        {like ? likeCount + 1 : likeCount}
      </span>
    </motion.button>
  );
}

export default LikeButton;
