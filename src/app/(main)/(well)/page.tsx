import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/auth';
import { SideWellHeader } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import dynamic from 'next/dynamic';
import WellListSkeleton from '@/components/Fallback/Skeleton/WellListSkeleton';
import { Metadata } from 'next';

const WellList = dynamic(
  () => import('@/features/Well/components/WellList/WellList'),
  {
    ssr: false,
    loading: () => <WellListSkeleton />,
  }
);

export const metadata: Metadata = {
  title: '나의 우물',
};

async function WellPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  return (
    <MainLayout extraClass='bg-gray-300'>
      <SideWellHeader userId={userId} hasStoreButton bgColor='bg-gray-300' />
      {userId && <WellList userId={userId} isRootUser />}
    </MainLayout>
  );
}

export default WellPage;
