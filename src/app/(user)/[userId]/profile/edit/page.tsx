import React from 'react';
import { ProfileEditForm } from '@/features/Profile';
import { Metadata } from 'next';

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

interface Props {
  params: {
    userId: string;
  };
}

function ProfileEditPage({ params: { userId } }: Props) {
  return <ProfileEditForm userId={userId} />;
}

export default ProfileEditPage;
