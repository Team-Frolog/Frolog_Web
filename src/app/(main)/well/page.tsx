'use client';

import { SideWellHeader, WellList } from '@/features/Well';
import { useProfile } from '@/hooks/useProfile';
import MainLayout from '@/layouts/MainLayout';
import { useSession } from 'next-auth/react';
import React from 'react';

function WellListPage() {
  const { data: session } = useSession();
  const { profile } = useProfile(session?.user.id);

  return (
    <>
      <MainLayout extraClass='bg-gray-300'>
        <SideWellHeader
          username={profile?.username}
          hasStoreButton
          bgColor='bg-gray-300'
        />
        <WellList />
      </MainLayout>
    </>
  );
}

export default WellListPage;
