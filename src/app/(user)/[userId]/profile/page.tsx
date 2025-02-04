import ProfileSkeleton from '@/components/Fallback/Skeleton/ProfileSkeleton';
import WellListSkeleton from '@/components/Fallback/Skeleton/WellListSkeleton';
import WellEntryHeader from '@/components/Header/WellEntryHeader';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import { QUERY_KEY } from '@/constants/query';
import { Menu } from '@/features/Profile';
import { WellList } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import { authOptions } from '@/utils/auth/nextAuth';
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
import React, { Suspense } from 'react';

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
    queryKey: [QUERY_KEY.profileDetail, userId],
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
        <div className='flex h-fit w-full flex-col gap-[36px] pb-[32px]'>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Profile userId={userId} isRootUser={isRootUser} />
          </HydrationBoundary>

          {isRootUser ? (
            <Menu />
          ) : (
            <Suspense fallback={<WellListSkeleton />}>
              <WellList userId={userId} isRootUser={isRootUser} />
            </Suspense>
          )}
        </div>
      </MainLayout>
      <NavigationBar />
    </>
  );
}

export default UserProfilePage;
