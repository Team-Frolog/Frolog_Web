'use client';

import Button from '@/components/common/button/Button';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

function WellPage() {
  const { data: session } = useSession();
  return (
    <div className='flex w-full flex-col gap-5 break-all p-page'>
      <h1>메인 우물 페이지입니다</h1>
      <span>
        <strong>로그인 한 user: </strong>
        {session?.user.id}
      </span>
      <Button onClick={() => signOut({ callbackUrl: '/login' })}>
        임시 로그아웃 버튼
      </Button>
    </div>
  );
}

export default WellPage;
