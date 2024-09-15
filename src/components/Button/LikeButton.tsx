import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartFilledIcon, HeartIcon } from 'public/icons';

function LikeButton() {
  const [like, setLike] = useState(false);

  return (
    <motion.button
      whileTap={{ scale: 1.1 }}
      type='button'
      className='flex items-center gap-[4px]'
      onClick={() => setLike((prev) => !prev)}
    >
      {like ? <HeartFilledIcon /> : <HeartIcon />}
      <span className='text-body-md text-gray-600'>{like ? 14 : 13}</span>
    </motion.button>
  );
}

export default LikeButton;
