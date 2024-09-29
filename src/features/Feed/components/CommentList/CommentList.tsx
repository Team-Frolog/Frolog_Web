'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import MainLayout from '@/layouts/MainLayout';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import { useComments } from '../../hooks/useComments';

interface Props {
  itemId: string;
}

function CommentList({ itemId }: Props) {
  const isReview = useSearchParams().get('type') === 'review';
  const { comments, handleAddComment } = useComments(itemId, isReview);

  return (
    <>
      <MainLayout>
        <div className='flex w-full flex-col gap-[36px] py-[16px]'>
          {comments.map((item) => (
            <CommentItem key={item.id} itemId={itemId} commentData={item} />
          ))}
        </div>
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
