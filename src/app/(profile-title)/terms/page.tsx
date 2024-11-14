import { TermsMenu } from '@/features/Profile';
import MainLayout from '@/layouts/MainLayout';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '이용약관',
};

function TermsPage() {
  return (
    <MainLayout extraClass='bg-white px-page pb-[30px] pt-[16px]'>
      <TermsMenu />
    </MainLayout>
  );
}

export default TermsPage;
