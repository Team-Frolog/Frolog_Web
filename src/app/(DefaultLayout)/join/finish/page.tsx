'use client';

import BigTitle from '@/components/common/text/BigTitle';
import React from 'react';
import JoinFinishLight from '@/components/joinPage/JoinFinishLight';
import useCustomBack from '@/hooks/useCustomBack';
import { useRouter } from 'next/navigation';

function JoinFinishPage() {
  const router = useRouter();
  useCustomBack(() => router.push('/login'));

  return (
    <div className='flex h-fit w-full flex-col justify-between overflow-hidden mobile:h-screen'>
      <div className='py-[80px]'>
        <BigTitle align='text-center'>
          야호!
          <br />
          가입이
          <br />
          완료되었어요
        </BigTitle>
      </div>
      <JoinFinishLight />
    </div>
  );
}

export default JoinFinishPage;
