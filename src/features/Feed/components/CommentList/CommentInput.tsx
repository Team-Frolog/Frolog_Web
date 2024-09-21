'use client';

import useCommentStore from '@/store/commentStore';
import { CancelIcon, EnterIcon } from 'public/icons';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function CommentInput() {
  const { commentUser, setCommentUser } = useCommentStore();
  const [isFocusing, setIsFocusing] = useState(false);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.currentTarget.blur();
      setIsFocusing(false);
    }
  };

  return (
    <div className='flex w-full flex-col'>
      {commentUser && (
        <div className='flex items-center justify-between bg-gray-200 px-page py-[8px] text-body-md text-gray-600'>
          <span>{commentUser?.name}님에게 댓글 남기는 중</span>
          <motion.button
            whileTap={{ scale: 1.1 }}
            type='button'
            onClick={() => setCommentUser(undefined)}
          >
            <CancelIcon fill='#727384' width={16} height={16} />
          </motion.button>
        </div>
      )}
      <div className='flex bg-white px-page py-[20px]'>
        <div className='relative flex w-full'>
          <input
            type='text'
            placeholder='댓글을 입력해주세요'
            className='input-common input-light flex-1 pr-[60px] placeholder:text-sm'
            onFocus={() => setIsFocusing(true)}
            onBlur={() => setIsFocusing(false)}
            onKeyDown={handleKeyPress}
          />
          <EnterIcon
            fill={isFocusing ? '#00CE4C' : '#E0E1E9'}
            className='absolute right-[16px] top-1/2 -translate-y-1/2'
          />
        </div>
      </div>
    </div>
  );
}

export default CommentInput;
