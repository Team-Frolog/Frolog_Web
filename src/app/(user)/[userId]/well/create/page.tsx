import { WellForm } from '@/features/Well';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '우물 생성',
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

function WellCreatePage({ params: { userId } }: Props) {
  return <WellForm type='write' userId={userId} />;
}

export default WellCreatePage;
