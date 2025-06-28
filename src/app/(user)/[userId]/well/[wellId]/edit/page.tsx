import { getMyFrogList } from '@/features/Store/api/store.server.api';
import { WellForm } from '@/features/Well';
import { getWellDetail } from '@/features/Well/api/well.server.api';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

interface Props {
  params: {
    userId: string;
    wellId: string;
  };
}

async function WellEditPage({ params: { wellId, userId } }: Props) {
  const myFrogList = await getMyFrogList(userId);
  const wellData = await getWellDetail(wellId);

  return (
    <Suspense fallback={<></>}>
      <WellForm
        type='edit'
        wellId={wellId}
        myFrogList={myFrogList}
        wellData={wellData}
      />
    </Suspense>
  );
}

export default WellEditPage;

export const metadata: Metadata = {
  title: '우물 수정',
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
    title: '우물 수정',
  },
  twitter: {
    title: '우물 수정',
  },
};
