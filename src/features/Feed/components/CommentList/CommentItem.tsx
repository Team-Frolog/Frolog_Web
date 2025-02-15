'use client';

import React, { useState } from 'react';
import { useUserId } from '@/store/sessionStore';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import useCommentStore from '@/store/commentStore';
import LikeButton from '@/components/Button/LikeButton';
import { useProfile } from '@/hooks/user/useProfile';
import { formatDate } from '@/utils/date';
import ProfileHeader from '@/components/Header/ProfileHeader/ProfileHeader';
import ChildCommentItem from './ChildCommentItem';
import { useChildComments } from '../../hooks/child/useChildComments';
import { Comments } from '../../types/comment';
import { useChangeComment } from '../../hooks/comment/useChangeComment';

interface Props {
  /** 댓글 대상이 되는 컨텐츠의 id */
  contentId: string;
  /** 댓글 데이터 객체 */
  commentData: Comments;
}

/** 댓글 아이템 컴포넌트 */
function CommentItem({ commentData, contentId }: Props) {
  const userId = useUserId();
  const [more, setMore] = useState(false);

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
  const isReview = useSearchParams().get('type') === 'review';
  const { childComments, isFetched } = useChildComments({
    more,
    contentId,
    parentId: commentData.id,
    isReview,
  });
  const { handleChangeLike, handleDeleteComment } = useChangeComment(
    contentId,
    isReview
  );
  const setCommentUser = useCommentStore((state) => state.setCommentUser);

  if (!profile || !commentData) return null;

  return (
    <>
      <div className='flex w-full flex-col gap-[12px]'>
        <ProfileHeader
          type='comment'
          userId={writer}
          isDeleted={deleted}
          onDelete={
            userId === writer
              ? () =>
                  handleDeleteComment({
                    id: contentId,
                    commentId: commentData.id,
                  })
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
                    parentId: commentData.parent || commentData.id,
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
      {replies !== undefined && replies.length > 0 && (!more || !isFetched) && (
        <ChildCommentItem
          contentId={contentId}
          isFirstChild
          hasMoreButton={reply_count ? reply_count > 1 : false}
          moreCount={reply_count ? reply_count - 1 : 0}
          onClickMore={() => setMore(true)}
          childCommentData={replies[0]}
        />
      )}
      {more &&
        isFetched &&
        childComments.map((comment: Comments) => (
          <ChildCommentItem
            contentId={contentId}
            key={comment.id}
            onClickMore={() => setMore(true)}
            childCommentData={comment}
          />
        ))}
    </>
  );
}

export default CommentItem;
