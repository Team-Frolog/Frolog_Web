import LinkButton from '@/components/Button/LinkButton';
import ProfileSkeleton from '@/components/Fallback/Skeleton/ProfileSkeleton';
import SideHeader from '@/components/Header/SideHeader';
import NavigationBar from '@/components/NavigationBar';
import { Menu } from '@/features/Profile';
import MainLayout from '@/layouts/MainLayout';
import { getIsRootUser } from '@/utils/auth/getIsRootUser';
import dynamic from 'next/dynamic';
import React from 'react';

const Profile = dynamic(
  () => import('@/features/Profile/components/Profile/Profile'),
  {
    ssr: false,
    loading: () => <ProfileSkeleton />,
  }
);

interface Props {
  params: {
    userId: string;
  };
}

async function UserProfilePage({ params: { userId } }: Props) {
  const { isRootUser } = await getIsRootUser(userId);

  return (
    <>
      <MainLayout>
        <SideHeader title='프로필' hasBackButton={!isRootUser} />
        <div className='flex w-full flex-1 flex-col justify-between gap-[32px] pb-[32px]'>
          <Profile userId={userId} isRootUser={isRootUser} />
          {isRootUser && <Menu />}
          {!isRootUser && (
            <div className='flex px-page'>
              <LinkButton route={`/${userId}/well`}>우물 놀러가기</LinkButton>
            </div>
          )}
        </div>
      </MainLayout>
      {isRootUser && <NavigationBar />}
    </>
  );
}

export default UserProfilePage;
