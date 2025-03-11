import React from 'react';
import { ResetPasswordForm } from '@/features/ResetPassword';
import { Metadata } from 'next';

function ResetPasswordPage() {
  return <ResetPasswordForm />;
}

export default ResetPasswordPage;

export const metadata: Metadata = {
  title: '비밀번호 찾기',
  openGraph: {
    title: '비밀번호 찾기',
  },
  twitter: {
    title: '비밀번호 찾기',
  },
};
