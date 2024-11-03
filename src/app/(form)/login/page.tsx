import React from 'react';
import { LoginFormPage } from '@/features/Login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로그인',
};

function LoginPage() {
  return <LoginFormPage />;
}

export default LoginPage;
