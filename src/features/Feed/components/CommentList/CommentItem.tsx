'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import useCommentStore from '@/store/commentStore';
import LikeButton from '@/components/Button/LikeButton';
import { useProfile } from '@/hooks/useProfile';
import { formatDate } from '@/utils/format';
import ProfileHeader from '../ProfileHeader';
import ChildCommentItem from './ChildCommentItem';
import { useChildComments } from '../../hooks/useChildComments';
import { isGetMemoRes } from '../../utils/typeGuard';
import { Comments } from '../../types/comment';
import { useDeleteComment } from '../../hooks/useDeleteComment';
import { useLikeComment } from '../../hooks/useLikeComment';

interface Props {
  commentData: Comments;
  itemId: string;
}

function CommentItem({ commentData, itemId }: Props) {
  const [more, setMore] = useState(false);
  const { data: session } = useSession();
  const {
    id,
    writer,
    content,
    like,
    like_count,
    date,
    replies,
    reply_count,
    deleted,
  } = commentData;
  const { profile } = useProfile(writer);
  const isReview = !isGetMemoRes(commentData);
  const { childComments, isFetched } = useChildComments({
    more,
    itemId,
    parentId: commentData.id,
    isReview,
  });
  const { handleDeleteComment } = useDeleteComment(isReview);
  const { handleChangeLike } = useLikeComment(itemId, isReview);
  const setCommentUser = useCommentStore((state) => state.setCommentUser);

  if (!profile || !commentData) return <></>;

  return (
    <>
      <div className='flex w-full flex-col gap-[12px]'>
        <ProfileHeader
          type='comment'
          userId={writer}
          onDelete={
            session?.user.id === writer
              ? () =>
                  handleDeleteComment({ id: itemId, commentId: commentData.id })
              : undefined
          }
        />
        <p
          className={`break-all px-page text-body-lg ${deleted ? 'text-gray-500' : 'text-gray-800'}`}
        >
          {deleted ? '삭제된 댓글입니다.' : content}
        </p>
        <div
          className={`flex items-center px-page ${deleted ? 'justify-end' : 'justify-between'}`}
        >
          {!deleted && (
            <div className='flex gap-[8px]'>
              <LikeButton
                isLiked={like ?? false}
                onClickLike={() => handleChangeLike({ id, value: !like })}
                likeCount={like_count || 0}
              />
              <motion.button
                whileTap={{ scale: 1.1 }}
                type='button'
                className='text-body-md text-gray-600'
                onClick={() =>
                  setCommentUser({
                    parentId: commentData.parent || writer,
                    id: writer,
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
      </div>
      {replies !== undefined && replies.length > 0 && !more && !isFetched && (
        <ChildCommentItem
          hasMoreButton={!!reply_count}
          moreCount={reply_count}
          onClickMore={() => setMore(true)}
          childCommentData={replies[0]}
        />
      )}
      {more &&
        isFetched &&
        childComments.map((comment: Comments) => (
          <ChildCommentItem
            key={comment.id}
            hasMoreButton={!!reply_count}
            moreCount={reply_count}
            onClickMore={() => setMore(true)}
            childCommentData={comment}
          />
        ))}
    </>
  );
}

export default CommentItem;
