import React from 'react';
import { FollowPage } from '@/features/Profile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '팔로우',
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

function FollowsPage({ params: { userId } }: Props) {
  return <FollowPage userId={userId} />;
}

export default FollowsPage;
