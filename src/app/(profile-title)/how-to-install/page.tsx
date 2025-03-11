import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const HowToInstall = dynamic(
  () => import('@/features/Profile/components/HowToInstall/HowToInstall')
);

function HowToInstallPage() {
  return <HowToInstall />;
}

export default HowToInstallPage;

export const metadata: Metadata = {
  title: '앱 설치방법',
  openGraph: {
    title: '앱 설치방법',
  },
  twitter: {
    title: '앱 설치방법',
  },
};
