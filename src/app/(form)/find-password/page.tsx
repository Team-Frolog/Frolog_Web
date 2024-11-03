import React from 'react';
import { ResetPasswordForm } from '@/features/ResetPassword';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '비밀번호 찾기',
};

function ResetPasswordPage() {
  return <ResetPasswordForm />;
}

export default ResetPasswordPage;
