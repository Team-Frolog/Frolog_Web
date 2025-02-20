'use client';

import { useUserId } from '@/store/sessionStore';
import useCommentStore from '@/store/commentStore';
import { CancelIcon, EnterIcon } from 'public/icons';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PostCommentMutation } from '../../types/comment';

export interface CommentInputProps {
  /** 댓글을 작성할 컨텐츠의 id */
  contentId: string;
  /** 댓글 입력값 */
  comment: string;
  /** 댓글 setter */
  setComment: React.Dispatch<React.SetStateAction<string>>;
  /** 컨텐츠가 리뷰인지 여부 */
  isReview: boolean;
  /** 댓글 추가 핸들러 */
  handleAddComment: PostCommentMutation;
}

/** 댓글 입력 input 컴포넌트
 * - 외부에서 useState를 활용하여 값과 setter를 전달해주어야 합니다.
 * - 전역 스토어를 활용하여 대댓글 작성자 정보를 유지합니다.
 */
function CommentInput({
  contentId,
  isReview,
  handleAddComment,
  comment,
  setComment,
}: CommentInputProps) {
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
    req[isReview ? 'review_id' : 'memo_id'] = contentId;
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
      <WithConditionalRendering condition={!!commentUser}>
        <div className='flex items-center justify-between bg-gray-200 px-page py-[8px] text-body-md text-gray-600'>
          <span>{commentUser?.name}님에게 댓글 남기는 중</span>
          <motion.button
            whileTap={{ scale: 1.1 }}
            type='button'
            onClick={() => setCommentUser(null)}
          >
            <CancelIcon fill='#727384' width={16} height={16} />
          </motion.button>
        </div>
      </WithConditionalRendering>

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
