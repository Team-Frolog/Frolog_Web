import CommentListSkeleton from '@/components/Fallback/Skeleton/Comment/CommentListSkeleton';
import BackHeader from '@/components/Header/BackHeader';
import { CommentList } from '@/features/Feed';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

interface Props {
  params: {
    contentId: string;
  };
}

function CommentPage({ params: { contentId } }: Props) {
  return (
    <div className='flex w-full flex-1 flex-col overflow-hidden'>
      <BackHeader />
      <Suspense fallback={<CommentListSkeleton />}>
        <CommentList contentId={contentId} />
      </Suspense>
    </div>
  );
}

export default CommentPage;

export const metadata: Metadata = {
  title: '댓글',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: '댓글',
  },
  twitter: {
    title: '댓글',
  },
};
