'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useObserver } from '@/hooks/gesture/useObserver';
import MainLayout from '@/layouts/MainLayout';
import EmptyContentFrog from '@/components/Fallback/EmptyContentFrog';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import { useComments } from '../../hooks/comment/useComments';

interface Props {
  itemId: string;
}

function CommentList({ itemId }: Props) {
  const isReview = useSearchParams().get('type') === 'review';
  const {
    comments,
    isEmpty,
    isFetched,
    handleAddComment,
    comment,
    setComment,
    hasNextPage,
    fetchNextPage,
  } = useComments(itemId, isReview);

  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <>
      <MainLayout extraClass='bg-white'>
        {isEmpty && isFetched && (
          <div className='flex flex-1 items-center justify-center'>
            <EmptyContentFrog title='첫 댓글을 남겨보세요!' />
          </div>
        )}
        {!isEmpty && isFetched && (
          <div className='flex w-full flex-col gap-[36px] py-[16px]'>
            {comments.map((item) => (
              <CommentItem key={item.id} itemId={itemId} commentData={item} />
            ))}
          </div>
        )}
        <div ref={setTarget} id='observer' className='h-[10px]' />
      </MainLayout>
      <CommentInput
        itemId={itemId}
        comment={comment}
        setComment={setComment}
        isReview={isReview}
        handleAddComment={handleAddComment}
      />
    </>
  );
}

export default CommentList;
