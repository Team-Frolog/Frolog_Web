import MainLayout from '@/layouts/MainLayout';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

export const metadata: Metadata = {
  title: '이용약관',
};

const TermsMenu = dynamic(
  () => import('@/features/Profile/components/Terms/TermsMenu')
);

function TermsPage() {
  return (
    <MainLayout extraClass='bg-white px-page pb-[30px] pt-[16px]'>
      <TermsMenu />
    </MainLayout>
  );
}

export default TermsPage;
