'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useObserver } from '@/hooks/gesture/useObserver';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import Observer from '@/components/Gesture/Observer';
import MainLayout from '@/layouts/MainLayout';
import EmptyContentFrog from '@/components/Fallback/EmptyContentFrog';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import { useComments } from '../../hooks/comment/useComments';

interface Props {
  /** 댓글 대상이 되는 컨텐츠 id */
  contentId: string;
}

/** 댓글 리스트 컴포넌트
 * - 'type' 쿼리 스트링에 따라 컨텐츠가 리뷰인지 메모인지 판단합니다.
 * - 무한스크롤이 적용되어 있습니다.
 */
function CommentList({ contentId }: Props) {
  const isReview = useSearchParams().get('type') === 'review';
  const {
    comments,
    isEmpty,
    handleAddComment,
    comment,
    setComment,
    hasNextPage,
    fetchNextPage,
  } = useComments(contentId, isReview);

  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <>
      <MainLayout extraClass='bg-white'>
        <WithConditionalRendering
          condition={!isEmpty}
          fallback={
            <div className='flex flex-1 items-center justify-center'>
              <EmptyContentFrog title='첫 댓글을 남겨보세요!' />
            </div>
          }
        >
          <div className='flex w-full flex-col gap-[36px] py-[16px]'>
            {comments.map((item) => (
              <CommentItem
                key={item.id}
                contentId={contentId}
                commentData={item}
              />
            ))}
          </div>
        </WithConditionalRendering>
        <Observer setTarget={setTarget} isFetching={false} />
      </MainLayout>
      <CommentInput
        contentId={contentId}
        comment={comment}
        setComment={setComment}
        isReview={isReview}
        handleAddComment={handleAddComment}
      />
    </>
  );
}

export default CommentList;
