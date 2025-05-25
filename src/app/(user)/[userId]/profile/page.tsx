import ProfileSkeleton from '@/components/Fallback/Skeleton/Profile/ProfileSkeleton';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import MainLayout from '@/layouts/MainLayout';
import { getIsRootUser } from '@/utils/auth/getIsRootUser';
import { Metadata } from 'next';
import ProfilePageHeader from '@/features/Profile/components/Profile/ProfilePageHeader';
import { Profile, ProfileFeed } from '@/features/Profile';
import WellListSkeleton from '@/components/Fallback/Skeleton/Well/WellListSkeleton';
import { WellList } from '@/features/Well';
import { Suspense } from 'react';
import { getProfileDetail } from '@/features/Profile/api/profile.server.api';
import { getWellList } from '@/features/Well/api/well.server.api';

export const dynamic = 'force-dynamic';

interface Props {
  params: {
    userId: string;
  };
}

async function UserProfilePage({ params: { userId } }: Props) {
  const { isRootUser } = await getIsRootUser(userId);
  const profileDetail = await getProfileDetail(userId);
  const initialWells = await getWellList(0, isRootUser);

  return (
    <>
      <MainLayout extraClass='bg-white'>
        <ProfilePageHeader isRootUser={isRootUser} userId={userId} />
        <div className='flex h-fit w-full flex-col gap-[36px] pb-[32px]'>
          <Suspense fallback={<ProfileSkeleton />}>
            <Profile
              userId={userId}
              profileDetail={profileDetail}
              isRootUser={isRootUser}
            />
          </Suspense>
          {isRootUser ? (
            <Suspense fallback={<ProfileFeedListSkeleton />}>
              <ProfileFeed />
            </Suspense>
          ) : (
            <Suspense fallback={<WellListSkeleton />}>
              <WellList
                userId={userId}
                isRootUser={isRootUser}
                initialWells={initialWells!}
              />
            </Suspense>
          )}
        </div>
      </MainLayout>
      <NavigationBar />
    </>
  );
}

export default UserProfilePage;

export const generateMetadata = async ({
  params: { userId },
}: Props): Promise<Metadata> => {
  const { isRootUser } = await getIsRootUser(userId);

  return {
    title: isRootUser ? '내 프로필' : '프로필',
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
};
