import React from 'react';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/auth';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import dynamic from 'next/dynamic';
import StoreItemSkeleton from '@/components/Fallback/Skeleton/StoreItemSkeleton';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { SearchStoreItem } from '@frolog/frolog-api';

export const metadata: Metadata = {
  title: '상점',
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

const StoreItemList = dynamic(
  () => import('@/features/Store/components/StoreItemList'),
  {
    ssr: false,
    loading: () => <StoreItemSkeleton />,
  }
);

async function StorePage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['storeItems'],
    queryFn: () =>
      new SearchStoreItem({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ type: 'frog', limit: 100 }),
    staleTime: 1000 * 10,
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {userId && <StoreItemList userId={userId} />}
      </HydrationBoundary>

      <Image
        src={IMAGES.frog.more_frogs}
        alt='more frogs'
        width={282}
        height={196}
      />
    </>
  );
}

export default StorePage;
