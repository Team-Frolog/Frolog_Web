'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import MainLayout from '@/layouts/MainLayout';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import { useReviewComments } from '../../hooks/useReviewComments';
import { useMemoComments } from '../../hooks/useMemoComments';

interface Props {
  itemId: string;
}

function CommentList({ itemId }: Props) {
  const isReview = useSearchParams().get('type') === 'memo';
  const useComment = isReview ? useReviewComments : useMemoComments;
  const { comments } = useComment(itemId);

  return (
    <>
      <MainLayout>
        <div className='flex w-full flex-col gap-[36px] py-[16px]'>
          {comments.map((item) => (
            <CommentItem
              key={item.id}
              commentData={item}
              isChild={!!item.parent}
            />
          ))}
        </div>
      </MainLayout>
      <CommentInput />
    </>
  );
}

export default CommentList;
