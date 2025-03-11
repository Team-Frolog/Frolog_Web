import MainLayout from '@/layouts/MainLayout';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

const QuitForm = dynamic(
  () => import('@/features/Profile/components/Quit/QuitForm')
);

function QuitPage() {
  return (
    <MainLayout extraClass='bg-white px-page pb-[30px] pt-[16px]'>
      <QuitForm />
    </MainLayout>
  );
}

export default QuitPage;

export const metadata: Metadata = {
  title: '회원탈퇴',
  openGraph: {
    title: '회원탈퇴',
  },
  twitter: {
    title: '회원탈퇴',
  },
};
