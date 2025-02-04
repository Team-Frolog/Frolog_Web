import React from 'react';
import { MyReviewPage } from '@/features/Review';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/nextAuth';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { GetReview } from '@frolog/frolog-api';
import { QUERY_KEY } from '@/constants/query';

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
interface Props {
  params: {
    bookId: string;
    reviewId: string;
  };
}

async function WellBookReviewPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.reviewDetail, params.reviewId],
    queryFn: () =>
      new GetReview({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ id: params.reviewId }),
    staleTime: 1000 * 10,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MyReviewPage params={params} />
    </HydrationBoundary>
  );
}

export default WellBookReviewPage;
