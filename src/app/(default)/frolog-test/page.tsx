import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const FrologTest = dynamic(
  () => import('@/features/FrologTest/components/FrologTest')
);

function TestPage() {
  return <FrologTest />;
}

export default TestPage;

export const metadata: Metadata = {
  title: '독서 성향 테스트',
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
    title: '독서 성향 테스트',
  },
  twitter: {
    title: '독서 성향 테스트',
  },
};
