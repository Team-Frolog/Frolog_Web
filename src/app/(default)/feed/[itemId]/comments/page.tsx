import BackHeader from '@/components/Header/BackHeader';
import { CommentList } from '@/features/Feed';
import React from 'react';

interface Props {
  params: {
    itemId: string;
  };
}

function CommentPage({ params: { itemId } }: Props) {
  return (
    <div className='flex w-full flex-1 flex-col overflow-hidden'>
      <BackHeader />
      <CommentList itemId={itemId} />
    </div>
  );
}

export default CommentPage;
