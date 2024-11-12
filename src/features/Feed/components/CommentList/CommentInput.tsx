'use client';

import { useUserId } from '@/store/sessionStore';
import useCommentStore from '@/store/commentStore';
import { CancelIcon, EnterIcon } from 'public/icons';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PostCommentMutation } from '../../types/comment';

interface Props {
  itemId: string;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  isReview: boolean;
  handleAddComment: PostCommentMutation;
}

function CommentInput({
  itemId,
  isReview,
  handleAddComment,
  comment,
  setComment,
}: Props) {
  const userId = useUserId();
  const { commentUser, setCommentUser } = useCommentStore();
  const [isFocusing, setIsFocusing] = useState(false);

  const handleAdd = (value: string) => {
    const req: any = {
      writer: userId,
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
      if (comment.trim() !== '') {
        handleAdd(comment.trim());
      }
    }
  };

  return (
    <div className='safe-bottom z-70 flex h-max w-full shrink-0 flex-col'>
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
            className={`input-common input-light flex-1 pr-[60px] placeholder:text-body-lg ${comment ? 'border-main' : 'border-gray-200'}`}
            onChange={(e) => setComment(e.target.value)}
            onFocus={() => setIsFocusing(true)}
            onBlur={() => setIsFocusing(false)}
            onKeyDown={handleKeyPress}
          />
          <button
            type='button'
            onClick={() => {
              if (comment.trim() !== '') {
                handleAdd(comment);
              }
            }}
          >
            <EnterIcon
              fill={isFocusing || comment ? '#00CE4C' : '#E0E1E9'}
              className='absolute right-[16px] top-1/2 -translate-y-1/2'
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentInput;
