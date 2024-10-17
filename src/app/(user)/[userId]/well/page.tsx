import React from 'react';
import { SideWellHeader, WellList } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import { authOptions } from '@/utils/auth/auth';
import { getServerSession } from 'next-auth';

interface Props {
  params: {
    userId: string;
  };
}

async function UserWellListPage({ params: { userId } }: Props) {
  const session = await getServerSession(authOptions);
  const isRootUser = userId === session?.user.id;
  
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
