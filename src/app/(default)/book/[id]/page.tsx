import React from 'react';
import BookInfo from '@/components/Book/BookInfo';
import TitleHeader from '@/components/Header/TitleHeader';
import MainLayout from '@/layouts/MainLayout';
import { AboutBook } from '@/features/Book';
import { Metadata } from 'next';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { DEFAULT_LIMIT } from '@/constants/api';
import { GetBook, SearchReview } from '@frolog/frolog-api';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/nextAuth';
import { QUERY_KEY } from '@/constants/query';

interface Props {
  params: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: '도서 정보',
};

async function BookPage({ params: { id } }: Props) {
  const session = await getServerSession(authOptions);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.bookInfo, id],
    queryFn: () =>
      new GetBook({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ isbn: id }),
    staleTime: 1000 * 10,
  });

  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.reviewList, id],
    queryFn: ({ pageParam }) =>
      new SearchReview({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ isbn: id, limit: DEFAULT_LIMIT, page: pageParam }),
    initialPageParam: 0,
    staleTime: 1000 * 10,
  });

  return (
    <>
      <TitleHeader
        type='no_border'
        theme='dark'
        title='도서 상세 페이지'
        hasButton={false}
      />
      <MainLayout>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <BookInfo bookId={id} />
          <AboutBook bookId={id} />
        </HydrationBoundary>
      </MainLayout>
    </>
  );
}

export default BookPage;
