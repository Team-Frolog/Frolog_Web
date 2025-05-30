import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/nextAuth';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import StoreItemSkeleton from '@/components/Fallback/Skeleton/Store/StoreItemSkeleton';
import { getStoreItemList } from '@/features/Store/api/store.server.api';
import { StoreItemList } from '@/features/Store';

async function StorePage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const storeItemList = await getStoreItemList('frog', 100);

  return (
    <>
      <Suspense fallback={<StoreItemSkeleton />}>
        <StoreItemList userId={userId} storeItemList={storeItemList} />
      </Suspense>

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
  openGraph: {
    title: '상점',
  },
  twitter: {
    title: '상점',
  },
};
