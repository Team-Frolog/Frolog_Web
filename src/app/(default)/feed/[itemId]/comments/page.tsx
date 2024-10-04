import CommentListSkeleton from '@/components/Fallback/Skeleton/CommentListSkeleton';
import BackHeader from '@/components/Header/BackHeader';
import dynamic from 'next/dynamic';
import React from 'react';

interface Props {
  params: {
    itemId: string;
  };
}

const CommentList = dynamic(
  () => import('@/features/Feed/components/CommentList/CommentList'),
  {
    ssr: false,
    loading: () => <CommentListSkeleton />,
  }
);

function CommentPage({ params: { itemId } }: Props) {
  return (
    <div className='flex w-full flex-1 flex-col overflow-hidden'>
      <BackHeader />
      <CommentList itemId={itemId} />
    </div>
  );
}

export default CommentPage;
