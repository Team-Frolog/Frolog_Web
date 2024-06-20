'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

function WellPage() {
  const { data: session } = useSession();
  return (
    <div>
      <h1>메인 우물 페이지입니다</h1>
      <span>로그인 한 user id: {session?.user.id}</span>
    </div>
  );
}

export default WellPage;
