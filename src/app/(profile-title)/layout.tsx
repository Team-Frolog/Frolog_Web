import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import ProfileTitleHeader from '@/components/Header/ProfileTitleHeader';

function ProfileTitleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProfileTitleHeader />
      <MainLayout extraClass='bg-white'>{children}</MainLayout>
    </>
  );
}

export default ProfileTitleLayout;
