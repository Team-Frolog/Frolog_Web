import React from 'react';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth/nextAuth';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { GetProfileDetail } from '@frolog/frolog-api';
import { QUERY_KEY } from '@/constants/query';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: '프로필 수정',
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

const ProfileEditForm = dynamic(
  () => import('@/features/Profile/components/Profile/ProfileEditForm')
);

interface Props {
  params: {
    userId: string;
  };
}

async function ProfileEditPage({ params: { userId } }: Props) {
  const session = await getServerSession(authOptions);
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
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProfileEditForm userId={userId} />
    </HydrationBoundary>
  );
}

export default ProfileEditPage;
