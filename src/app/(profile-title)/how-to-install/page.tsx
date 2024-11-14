import React from 'react';
import { HowToInstall } from '@/features/Profile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '앱 설치방법',
};

function HowToInstallPage() {
  return <HowToInstall />;
}

export default HowToInstallPage;
