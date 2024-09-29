'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import MainLayout from '@/layouts/MainLayout';
import EmptyContentFrog from '@/components/Fallback/EmptyContentFrog';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import { useComments } from '../../hooks/useComments';

interface Props {
  itemId: string;
}

function CommentList({ itemId }: Props) {
  const isReview = useSearchParams().get('type') === 'review';
  const { comments, isEmpty, isFetched, handleAddComment } = useComments(
    itemId,
    isReview
  );

  return (
    <>
      <MainLayout>
        {isEmpty && isFetched && (
          <div className='flex items-center justify-center'>
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
      </MainLayout>
      <CommentInput
        itemId={itemId}
        isReview={isReview}
        handleAddComment={handleAddComment}
      />
    </>
  );
}

export default CommentList;
