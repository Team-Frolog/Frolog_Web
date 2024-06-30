'use client';

import authAPI from '@/app/api/auth.api';
import Button from '@/components/common/button/Button';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

function WellPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignOut = async () => {
    // if (session) {
    //   const data = await authAPI.signOut();

    //   if (data) {
    //     signOut({ callbackUrl: '/login' });
    //   }
    // }
    signOut({ callbackUrl: '/login', redirect: true });
  };

  const handleQuit = async () => {
    if (session) {
      const result = await authAPI.quit();

      if (result) {
        signOut({ callbackUrl: '/landing', redirect: true });
      }
    }
  };

  return (
    <div className='flex w-full flex-col gap-5 break-all p-page'>
      <h1>메인 우물 페이지입니다</h1>
      <span>
        <strong>로그인 한 user: </strong>
        {session?.user.id}
      </span>
      <Button onClick={handleSignOut}>임시 로그아웃 버튼</Button>
      <Button onClick={handleQuit}>회원탈퇴</Button>
      <Button onClick={() => router.push('/landing')}>랜딩페이지로</Button>
    </div>
  );
}

export default WellPage;
