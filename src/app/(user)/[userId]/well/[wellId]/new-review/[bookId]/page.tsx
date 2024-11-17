import React from 'react';
import { NewReviewPage } from '@/features/Review';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/auth';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { GetBook } from '@frolog/frolog-api';

export const metadata: Metadata = {
  title: '새로운 리뷰',
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
    wellId: string;
    userId: string;
    bookId: string;
  };
}

async function AddNewReviewPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['bookInfo', params.bookId],
    queryFn: () =>
      new GetBook({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ isbn: params.bookId }),
    staleTime: 1000 * 10,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewReviewPage params={params} />
    </HydrationBoundary>
  );
}

export default AddNewReviewPage;
