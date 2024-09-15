'use client';

import React from 'react';
import { motion } from 'framer-motion';
import useCommentStore from '@/store/commentStore';
import LikeButton from '@/components/Button/LikeButton';
import ProfileHeader from '../ProfileHeader';

interface Props {
  isChild?: boolean;
}

function CommentItem({ isChild = false }: Props) {
  const setCommentUser = useCommentStore((state) => state.setCommentUser);

  return (
    <div
      className={`flex w-full flex-col gap-[12px] ${isChild && 'pl-[24px]'}`}
    >
      <ProfileHeader isChildComment={isChild} />
      <p className='break-all px-page text-body-lg text-gray-800'>
        <strong className='mr-[8px] font-normal text-main'>프롤로그</strong>
        comment
      </p>
      <div className='flex items-center justify-between px-page'>
        <div className='flex gap-[8px]'>
          <LikeButton />
          <motion.button
            whileTap={{ scale: 1.1 }}
            type='button'
            className='text-body-md text-gray-600'
            onClick={() => setCommentUser({ id: '1', name: '프롤로그' })}
          >
            댓글 달기
          </motion.button>
        </div>
        <span className='text-body-md text-gray-600'>2024.08.20</span>
      </div>
    </div>
  );
}

export default CommentItem;
