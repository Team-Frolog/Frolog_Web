import React from 'react';
import { SideWellHeader } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import { getIsRootUser } from '@/utils/auth/getIsRootUser';
import NavigationBar from '@/components/NavigationBar';
import dynamic from 'next/dynamic';
import WellListSkeleton from '@/components/Fallback/Skeleton/WellListSkeleton';

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
  const { isRootUser } = await getIsRootUser(userId);

  return (
    <>
      <MainLayout extraClass='bg-gray-300'>
        <SideWellHeader
          userId={userId}
          hasBackButton={!isRootUser}
          hasStoreButton={isRootUser}
          bgColor='bg-gray-300'
        />
        <WellList userId={userId} isRootUser={isRootUser} />
      </MainLayout>
      {isRootUser && <NavigationBar />}
    </>
  );
}

export default UserWellListPage;
