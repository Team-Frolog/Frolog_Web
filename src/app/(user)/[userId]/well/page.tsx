import React from 'react';
import { SideWellHeader } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import dynamic from 'next/dynamic';
import WellListSkeleton from '@/components/Fallback/Skeleton/WellListSkeleton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '우물 목록',
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

const WellList = dynamic(
  () => import('@/features/Well/components/WellList/WellList'),
  {
    ssr: false,
    loading: () => <WellListSkeleton />,
  }
);

interface Props {
  params: {
    userId: string;
  };
}

async function UserWellListPage({ params: { userId } }: Props) {
  return (
    <>
      <MainLayout extraClass='bg-gray-300'>
        <SideWellHeader userId={userId} hasBackButton bgColor='bg-gray-300' />
        <WellList userId={userId} isRootUser={false} />
      </MainLayout>
    </>
  );
}

export default UserWellListPage;
