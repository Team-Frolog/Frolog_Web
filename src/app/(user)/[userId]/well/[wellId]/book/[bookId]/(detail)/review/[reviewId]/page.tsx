import React, { Suspense } from 'react';
import { MyReviewPage } from '@/features/Review';
import { Metadata } from 'next';
import { getReviewDetail } from '@/features/Review/api/review.server.api';
import { getBookInfo } from '@/features/Book/api/book.server.api';

interface Props {
  params: {
    bookId: string;
    reviewId: string;
  };
}

async function WellBookReviewPage({ params }: Props) {
  const reviewData = await getReviewDetail(params.reviewId);

  return (
    <Suspense fallback={<></>}>
      <MyReviewPage params={params} reviewData={reviewData} />
    </Suspense>
  );
}

export default WellBookReviewPage;

export const generateMetadata = async ({
  params: { bookId, reviewId },
}: Props): Promise<Metadata> => {
  const reviewData = await getReviewDetail(reviewId);
  const bookInfo = await getBookInfo(bookId);

  const reviewSummary = `${reviewData.title} | ${reviewData.content}`;
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
