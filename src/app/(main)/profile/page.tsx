'use client';

import ProfileSkeleton from '@/components/Fallback/Skeleton/ProfileSkeleton';
import SideHeader from '@/components/Header/SideHeader';
import { Menu } from '@/features/Profile';
import MainLayout from '@/layouts/MainLayout';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import React from 'react';

const Profile = dynamic(
  () => import('@/features/Profile/components/Profile/Profile'),
  {
    ssr: false,
    loading: () => <ProfileSkeleton />,
  }
);

function ProfilePage() {
  const { data: session } = useSession();

  return (
    <MainLayout extraClass='bg-white'>
      <SideHeader title='프로필' />
      <div className='flex w-full flex-col gap-[32px] pb-[32px]'>
        {session ? <Profile userId={session.user.id} isMe /> : <ProfileSkeleton />}
        <Menu />
      </div>
    </MainLayout>
  );
}

export default ProfilePage;
