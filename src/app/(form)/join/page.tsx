import React from 'react';
import { JoinForm } from '@/features/Join';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원가입',
};

function JoinPage() {
  return <JoinForm />;
}

export default JoinPage;
