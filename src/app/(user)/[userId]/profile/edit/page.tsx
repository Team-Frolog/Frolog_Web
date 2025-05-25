import React, { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { getProfileDetail } from '@/features/Profile/api/profile.server.api';

const ProfileEditForm = dynamic(
  () => import('@/features/Profile/components/Profile/ProfileEditForm')
);

interface Props {
  params: {
    userId: string;
  };
}

async function ProfileEditPage({ params: { userId } }: Props) {
  const profileDetail = await getProfileDetail(userId);

  return (
    <Suspense fallback={<></>}>
      <ProfileEditForm userId={userId} profileDetail={profileDetail} />
    </Suspense>
  );
}

export default ProfileEditPage;

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
  openGraph: {
    title: '프로필 수정',
  },
  twitter: {
    title: '프로필 수정',
  },
};
