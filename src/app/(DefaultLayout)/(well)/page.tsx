'use client';

import { signOut, useSession } from 'next-auth/react';
import React from 'react';

function WellPage() {
  const { data: session } = useSession();
  return (
    <div className='flex flex-col'>
      <h1>메인 우물 페이지입니다</h1>
      <span>로그인 한 user: {session?.user.refreshToken}</span>
      <button onClick={() => signOut({ callbackUrl: '/login' })}>
        임시 로그아웃 버튼
      </button>
    </div>
  );
}

export default WellPage;
