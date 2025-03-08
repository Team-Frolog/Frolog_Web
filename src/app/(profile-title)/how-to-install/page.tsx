import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: '앱 설치방법',
};

const HowToInstall = dynamic(
  () => import('@/features/Profile/components/HowToInstall/HowToInstall')
);

function HowToInstallPage() {
  return <HowToInstall />;
}

export default HowToInstallPage;
