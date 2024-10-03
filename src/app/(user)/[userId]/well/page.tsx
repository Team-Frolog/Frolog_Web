'use client';

import { SideWellHeader, WellList } from '@/features/Well';
import { useProfile } from '@/hooks/useProfile';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

interface Props {
  params: {
    userId: string;
  };
}

function UserWellListPage({ params: { userId } }: Props) {
  const { profile } = useProfile(userId);
  
  return (
    <>
      <MainLayout>
        <SideWellHeader username={profile?.username} />
        <WellList />
      </MainLayout>
    </>
  );
}

export default UserWellListPage;
