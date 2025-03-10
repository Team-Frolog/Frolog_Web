import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const FollowPage = dynamic(
  () => import('@/features/Profile/components/FollowList/FollowPage')
);

interface Props {
  params: {
    userId: string;
  };
}

function FollowsPage({ params: { userId } }: Props) {
  return <FollowPage userId={userId} />;
}

export default FollowsPage;

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
  openGraph: {
    title: '팔로우',
  },
  twitter: {
    title: '팔로우',
  },
};
