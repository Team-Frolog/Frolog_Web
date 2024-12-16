import LinkButton from '@/components/Button/LinkButton';
import ProfileSkeleton from '@/components/Fallback/Skeleton/ProfileSkeleton';
import WellEntryHeader from '@/components/Header/WellEntryHeader';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import { Menu } from '@/features/Profile';
import MainLayout from '@/layouts/MainLayout';
import { authOptions } from '@/utils/auth/auth';
import { getIsRootUser } from '@/utils/auth/getIsRootUser';
import { GetProfileDetail } from '@frolog/frolog-api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import dynamic from 'next/dynamic';
import React from 'react';

const Profile = dynamic(
  () => import('@/features/Profile/components/Profile/Profile'),
  {
    ssr: false,
    loading: () => <ProfileSkeleton />,
  }
);

export const metadata: Metadata = {
  title: '프로필',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

interface Props {
  params: {
    userId: string;
  };
}

async function UserProfilePage({ params: { userId } }: Props) {
  const session = await getServerSession(authOptions);
  const { isRootUser } = await getIsRootUser(userId);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['profileDetail', userId],
    queryFn: () =>
      new GetProfileDetail({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        accessToken: session?.user.accessToken,
      }).fetch({ id: userId }),
    staleTime: 1000 * 10,
  });

  return (
    <>
      <MainLayout extraClass='bg-white'>
        <WellEntryHeader title='프로필' hasBackButton={!isRootUser} />
        <div
          className={`flex w-full flex-1 flex-col gap-[32px] pb-[32px] ${isRootUser ? 'justify-start' : 'justify-between'}`}
        >
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Profile userId={userId} isRootUser={isRootUser} />
          </HydrationBoundary>

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
