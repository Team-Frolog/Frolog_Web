import LinkButton from '@/components/Button/LinkButton';
import SideHeader from '@/components/Header/SideHeader';
import { Profile } from '@/features/Profile';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

interface Props {
  params: {
    userId: string;
  };
}

function UserProfilePage({ params: { userId } }: Props) {
  return (
    <MainLayout>
      <SideHeader title='프로필' hasBackButton />
      <div className='flex w-full flex-1 flex-col justify-between gap-[30px] pb-[30px]'>
        <Profile userId={userId} />
        <div className='flex px-page'>
          <LinkButton route={`/${userId}/well`}>우물 놀러가기</LinkButton>
        </div>
      </div>
    </MainLayout>
  );
}

export default UserProfilePage;
