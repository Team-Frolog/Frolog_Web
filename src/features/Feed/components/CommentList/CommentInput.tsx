'use client';

import { useSession } from 'next-auth/react';
import useCommentStore from '@/store/commentStore';
import { CancelIcon, EnterIcon } from 'public/icons';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PostCommentMutation } from '../../types/comment';

interface Props {
  itemId: string;
  isReview: boolean;
  handleAddComment: PostCommentMutation;
}

function CommentInput({ itemId, isReview, handleAddComment }: Props) {
  const [comment, setComment] = useState('');
  const { commentUser, setCommentUser } = useCommentStore();
  const { data: session } = useSession();
  const [isFocusing, setIsFocusing] = useState(false);

  const handleAdd = (value: string) => {
    const req: any = {
      writer: session?.user.id,
      parent: commentUser?.parentId,
      mention: commentUser?.id,
      content: value,
    };
    req[isReview ? 'review_id' : 'memo_id'] = itemId;
    handleAddComment(req);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.currentTarget.blur();
      setIsFocusing(false);
      handleAdd(comment);
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
            value={comment}
            placeholder='댓글을 입력해주세요'
            maxLength={400}
            className='input-common input-light flex-1 pr-[60px] placeholder:text-sm'
            onChange={(e) => setComment(e.target.value)}
            onFocus={() => setIsFocusing(true)}
            onBlur={() => setIsFocusing(false)}
            onKeyDown={handleKeyPress}
          />
          <button type='button' onClick={() => handleAdd(comment)}>
            <EnterIcon
              fill={isFocusing ? '#00CE4C' : '#E0E1E9'}
              className='absolute right-[16px] top-1/2 -translate-y-1/2'
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentInput;
