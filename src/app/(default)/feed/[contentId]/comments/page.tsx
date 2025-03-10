import CommentListSkeleton from '@/components/Fallback/Skeleton/Comment/CommentListSkeleton';
import BackHeader from '@/components/Header/BackHeader';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

interface Props {
  params: {
    contentId: string;
  };
}

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

const CommentList = dynamic(
  () => import('@/features/Feed/components/CommentList/CommentList'),
  {
    ssr: false,
    loading: () => <CommentListSkeleton />,
  }
);

function CommentPage({ params: { contentId } }: Props) {
  return (
    <div className='flex w-full flex-1 flex-col overflow-hidden'>
      <BackHeader />
      <CommentList contentId={contentId} />
    </div>
  );
}

export default CommentPage;
