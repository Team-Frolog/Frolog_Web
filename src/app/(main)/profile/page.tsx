import SideHeader from '@/components/Header/SideHeader';
import { Menu, Profile } from '@/features/Profile';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

function ProfilePage() {
  return (
    <MainLayout>
      <SideHeader title='프로필' />
      <div className='flex w-full flex-col gap-[32px] pb-[32px]'>
        <Profile />
        <Menu />
      </div>
    </MainLayout>
  );
}

export default ProfilePage;
