import React, { Suspense } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/nextAuth';
import WellListSkeleton from '@/components/Fallback/Skeleton/Well/WellListSkeleton';
import { Metadata } from 'next';
import { getWellList } from '@/features/Well/api/well.server.api';
import { WellList } from '@/features/Well';

async function WellPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  const wellList = await getWellList(0);

  return (
    <Suspense fallback={<WellListSkeleton />}>
      <WellList userId={userId} isRootUser initialWells={wellList!} />
    </Suspense>
  );
}

export default WellPage;

export const metadata: Metadata = {
  title: '나의 우물',
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
