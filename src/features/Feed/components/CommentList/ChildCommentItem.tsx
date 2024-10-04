'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useProfile } from '@/hooks/useProfile';
import useCommentStore from '@/store/commentStore';
import LikeButton from '@/components/Button/LikeButton';
import { motion } from 'framer-motion';
import { formatDate } from '@/utils/format';
import ProfileHeader from '../ProfileHeader';
import { Comments } from '../../types/comment';
import { useChangeChildComment } from '../../hooks/child/useChangeChildComment';

interface Props {
  itemId: string;
  childCommentData: Comments;
  moreCount?: number;
  onClickMore?: () => void;
  hasMoreButton?: boolean;
}

function ChildCommentItem({
  itemId,
  childCommentData,
  moreCount,
  onClickMore,
  hasMoreButton,
}: Props) {
  const {
    id,
    writer,
    mention,
    content,
    like,
    like_count,
    date,
    deleted,
    parent,
  } = childCommentData;
  const { profile } = useProfile(writer);
  const { profile: memtionProfile } = useProfile(mention);
  const isReview = useSearchParams().get('type') === 'review';
  const setCommentUser = useCommentStore((state) => state.setCommentUser);
  const { handleChangeLikeChild } = useChangeChildComment({
    isReview,
    itemId,
    parentId: childCommentData.parent || '',
  });

  if (!profile || !childCommentData) return <></>;

  return (
    <div className='flex w-full flex-col gap-[12px] pl-[24px]'>
      <ProfileHeader
        type='comment'
        userId={writer}
        isDeleted={deleted}
        isChildComment
      />
      <p
        className={`break-all px-page text-body-lg ${deleted ? 'text-gray-500' : 'text-gray-800'}`}
      >
        {deleted ? (
          '삭제된 댓글입니다.'
        ) : (
          <>
            <strong className='mr-[8px] font-normal text-main'>
              {memtionProfile?.username}
            </strong>
            {content}
          </>
        )}
      </p>
      <div
        className={`flex items-center px-page ${deleted ? 'justify-end' : 'justify-between'}`}
      >
        {!deleted && (
          <div className='flex gap-[8px]'>
            <LikeButton
              isLiked={like ?? false}
              likeCount={like_count || 0}
              onClickLike={() => handleChangeLikeChild({ id, value: !like })}
            />
            <motion.button
              whileTap={{ scale: 1.1 }}
              type='button'
              className='text-body-md text-gray-600'
              onClick={() =>
                setCommentUser({
                  id: writer,
                  parentId: parent!,
                  name: profile.username,
                })
              }
            >
              댓글 달기
            </motion.button>
          </div>
        )}
        <span className='text-body-md text-gray-600'>{formatDate(date)}</span>
      </div>
      {hasMoreButton && (
        <motion.button
          type='button'
          whileTap={{ scale: 1.1 }}
          onClick={onClickMore}
          className='text-body-md text-gray-600'
        >
          댓글 {moreCount}개 더보기
        </motion.button>
      )}
    </div>
  );
}

export default ChildCommentItem;
