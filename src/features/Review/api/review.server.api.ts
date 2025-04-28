import { authOptions } from '@/utils/auth/nextAuth';
import { GetReview, SearchReview } from '@frolog/frolog-api';
import { getServerSession } from 'next-auth';

export const getReviewList = async (bookId: string, userId: string) => {
  const session = await getServerSession(authOptions);

  const response = await new SearchReview({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken: session?.user.accessToken,
  }).fetch({ isbn: bookId, writer: userId });

  return response;
};

export const getReviewDetail = async (reviewId: string) => {
  const session = await getServerSession(authOptions);

  const response = await new GetReview({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken: session?.user.accessToken,
  }).fetch({ id: reviewId });

  return response;
};
