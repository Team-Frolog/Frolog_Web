import { QuitForm } from '@/features/Profile';
import MainLayout from '@/layouts/MainLayout';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '회원탈퇴',
};

function QuitPage() {
  return (
    <MainLayout extraClass='bg-white px-page pb-[30px] pt-[16px]'>
      <QuitForm />
    </MainLayout>
  );
}

export default QuitPage;
