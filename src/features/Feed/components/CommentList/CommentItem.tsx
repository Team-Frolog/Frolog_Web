'use client';

import React from 'react';
import { motion } from 'framer-motion';
import useCommentStore from '@/store/commentStore';
import LikeButton from '@/components/Button/LikeButton';
import { GetMemoCommentRes, GetReviewCommentRes } from '@frolog/frolog-api';
import { useProfile } from '@/hooks/useProfile';
import { formatDate } from '@/utils/format';
import ProfileHeader from '../ProfileHeader';

interface Props {
  commentData: GetReviewCommentRes | GetMemoCommentRes;
  isChild?: boolean;
}

function CommentItem({ commentData, isChild }: Props) {
  const { profile } = useProfile(commentData.writer);
  const { profile: memtionProfile } = useProfile(commentData.mention);
  const setCommentUser = useCommentStore((state) => state.setCommentUser);

  if (!profile || !commentData) return <></>;

  return (
    <div
      className={`flex w-full flex-col gap-[12px] ${isChild && 'pl-[24px]'}`}
    >
      <ProfileHeader
        type='comment'
        userId={commentData.writer}
        isChildComment={isChild}
      />
      <p className='break-all px-page text-body-lg text-gray-800'>
        {commentData.mention && (
          <strong className='mr-[8px] font-normal text-main'>
            {memtionProfile?.username}
          </strong>
        )}
        {commentData.content}
      </p>
      <div className='flex items-center justify-between px-page'>
        <div className='flex gap-[8px]'>
          <LikeButton likeCount={commentData.like_count || 0} />
          <motion.button
            whileTap={{ scale: 1.1 }}
            type='button'
            className='text-body-md text-gray-600'
            onClick={() =>
              setCommentUser({
                id: commentData.writer,
                name: profile.username,
              })
            }
          >
            댓글 달기
          </motion.button>
        </div>
        <span className='text-body-md text-gray-600'>
          {formatDate(commentData.date)}
        </span>
      </div>
    </div>
  );
}

export default CommentItem;
