import React from 'react';
import { SideWellHeader, WellList } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import { getIsRootUser } from '@/utils/auth/getIsRootUser';

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
    </>
  );
}

export default UserWellListPage;
