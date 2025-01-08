import React from 'react';
import { ReviewDetailPage } from '@/features/Review';
import { Metadata } from 'next';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { GetReview } from '@frolog/frolog-api';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/auth';
import { QUERY_KEY } from '@/constants/query';

interface Props {
  params: {
    reviewId: string;
  };
}

export const metadata: Metadata = {
  title: '독서 리뷰',
};

async function ReviewPage({ params: { reviewId } }: Props) {
  const session = await getServerSession(authOptions);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.reviewDetail, reviewId],
    queryFn: () =>
      new GetReview({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ id: reviewId }),
    staleTime: 1000 * 10,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ReviewDetailPage reviewId={reviewId} />
    </HydrationBoundary>
  );
}

export default ReviewPage;
