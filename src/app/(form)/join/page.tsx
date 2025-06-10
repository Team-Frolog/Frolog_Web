import React from 'react';
import { JoinForm } from '@/features/Join';
import { Metadata } from 'next';
import { useSearchParams } from 'next/navigation';
import GoogleJoinForm from '@/features/Join/components/GoogleJoinForm';

export const metadata: Metadata = {
  title: '회원가입',
  openGraph: {
    title: '회원가입',
  },
  twitter: {
    title: '회원가입',
  },
};

function JoinPage({ searchParams }: { searchParams: { type: string } }) {
  const { type } = searchParams;

  return type === 'google' ? <GoogleJoinForm /> : <JoinForm />;
}

export default JoinPage;
