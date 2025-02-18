'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useProfile } from '@/hooks/user/useProfile';
import useCommentStore from '@/store/commentStore';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import ProfileHeader from '@/components/Header/ProfileHeader/ProfileHeader';
import LikeButton from '@/components/Button/LikeButton';
import { motion } from 'framer-motion';
import { formatDate } from '@/utils/date';
import { Comments } from '../../types/comment';
import { useChangeChildComment } from '../../hooks/child/useChangeChildComment';

interface Props {
  /** 댓글 대상이 되는 컨텐츠의 id */
  contentId: string;
  /** 첫번째 자식인지 여부 */
  isFirstChild?: boolean;
  /** 댓글 데이터 객체 */
  childCommentData: Comments;
  /** 더보기 댓글 개수 */
  moreCount?: number;
  /** 더보기 클릭 핸들러 */
  onClickMore?: () => void;
  /** 더보기 버튼 렌더링 여부 */
  hasMoreButton?: boolean;
}

/** 자식 댓글 컴포넌트
 * - 첫번째 자식인 경우, 이후 자식 댓글 존재 유무에 따라 '더보기'를 렌더링할 수 있습니다.
 * - 댓글 좋아요, 삭제 혹은 신고 기능이 포함되어 있습니다.
 */
function ChildCommentItem({
  contentId,
  childCommentData,
  moreCount,
  onClickMore,
  hasMoreButton,
  isFirstChild = false,
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
  const { handleChangeLikeChild, handleDeleteComment } = useChangeChildComment({
    isReview,
    contentId,
    parentId: childCommentData.parent || '',
    isFirst: isFirstChild,
  });

  if (!profile || !childCommentData) return null;

  return (
    <div className='flex w-full flex-col gap-[12px] pl-[24px]'>
      <ProfileHeader
        type='comment'
        userId={writer}
        isDeleted={deleted}
        isChildComment
        onDelete={() => handleDeleteComment({ id: contentId, commentId: id })}
      />
      <p
        className={`break-all px-page text-body-lg ${deleted ? 'text-gray-500' : 'text-gray-800'}`}
      >
        <WithConditionalRendering
          condition={!deleted}
          fallback={<>삭제된 댓글입니다.</>}
        >
          <strong className='mr-[8px] font-normal text-main'>
            {memtionProfile?.username}
          </strong>
          {content}
        </WithConditionalRendering>
      </p>
      <div
        className={`flex items-center px-page ${deleted ? 'justify-end' : 'justify-between'}`}
      >
        <WithConditionalRendering condition={!deleted}>
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
        </WithConditionalRendering>

        <span className='text-body-md text-gray-600'>{formatDate(date)}</span>
      </div>
      <WithConditionalRendering condition={Boolean(hasMoreButton)}>
        <motion.button
          type='button'
          whileTap={{ scale: 1.1 }}
          onClick={onClickMore}
          className='text-body-md text-gray-600'
        >
          댓글 {moreCount}개 더보기
        </motion.button>
      </WithConditionalRendering>
    </div>
  );
}

export default ChildCommentItem;
