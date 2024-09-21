import SideHeader from '@/components/Header/SideHeader';
import { Profile } from '@/features/Profile';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function ProfilePage() {
  return (
    <MainLayout>
      <SideHeader title='프로필' />
      <Profile />
    </MainLayout>
  );
}

export default ProfilePage;
