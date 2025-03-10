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
import { GetBook, GetReview } from '@frolog/frolog-api';
import { QUERY_KEY } from '@/constants/query';

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

export const generateMetadata = async ({
  params: { bookId, reviewId },
}: Props): Promise<Metadata> => {
  const session = await getServerSession(authOptions);

  const reviewData = await new GetReview({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken: session?.user.accessToken,
  }).fetch({ id: reviewId });

  const reviewSummary = `${reviewData.title} | ${reviewData.content}`;

  const bookInfo = await new GetBook({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken: session?.user.accessToken,
  }).fetch({ isbn: bookId });

  return {
    title: `${bookInfo.title} - 리뷰`,
    description: reviewSummary.slice(0, 60),
    openGraph: {
      title: `${bookInfo.title} - 리뷰`,
      images: bookInfo.image ?? '/opengraph-image.png',
      description: reviewSummary.slice(0, 60),
      url: `https://www.frolog.kr/review/${reviewId}`,
    },
    twitter: {
      title: `${bookInfo.title} - 리뷰`,
      images: bookInfo.image ?? '/twitter-image.png',
      description: reviewSummary.slice(0, 60),
    },
  };
};
