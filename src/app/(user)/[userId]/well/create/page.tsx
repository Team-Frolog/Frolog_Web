import { getMyFrogList } from '@/features/Store/api/store.server.api';
import { WellForm } from '@/features/Well';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

interface Props {
  params: {
    userId: string;
  };
}

async function WellCreatePage({ params: { userId } }: Props) {
  const myFrogList = await getMyFrogList(userId);

  return (
    <Suspense fallback={<></>}>
      <WellForm type='write' myFrogList={myFrogList} />
    </Suspense>
  );
}

export default WellCreatePage;

export const metadata: Metadata = {
  title: '우물 생성',
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
    title: '우물 생성',
  },
  twitter: {
    title: '우물 생성',
  },
};
