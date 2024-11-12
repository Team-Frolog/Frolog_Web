import React from 'react';
import ReviewListSkeleton from '@/components/Fallback/Skeleton/ReviewListSkeleton';
import dynamic from 'next/dynamic';
import { getIsRootUser } from '@/utils/auth/getIsRootUser';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/auth';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { SearchReview } from '@frolog/frolog-api';

export const metadata: Metadata = {
  title: '리뷰',
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
};

const ReviewList = dynamic(
  () => import('@/features/Review/components/ReviewList/ReviewList'),
  {
    ssr: false,
    loading: () => <ReviewListSkeleton />,
  }
);

interface Props {
  params: {
    wellId: string;
    userId: string;
    bookId: string;
  };
}

async function ReviewPage({ params: { userId, wellId, bookId } }: Props) {
  const session = await getServerSession(authOptions);
  const { isRootUser } = await getIsRootUser(userId);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['reviews', bookId, userId],
    queryFn: () =>
      new SearchReview({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ isbn: bookId, writer: userId }),
    staleTime: 1000 * 30,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ReviewList
        bookId={bookId}
        wellId={wellId}
        userId={userId}
        isRootUser={isRootUser}
      />
    </HydrationBoundary>
  );
}

export default ReviewPage;
