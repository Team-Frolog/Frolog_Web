'use client';

import Button from '@/components/common/button/Button';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

function WellPage() {
  const router = useRouter();
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
      <hr />
      <h5 className='text-title_xl_bold'>버튼 테스트</h5>
      <div className='flex flex-col gap-3'>
        <motion.button
          whileTap={{ scale: 0.95, opacity: 0.9 }}
          transition={{ duration: 0 }}
          className='button'
        >
          버튼1
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95, opacity: 0.9 }}
          transition={{ duration: 0 }}
          className='button'
          onClick={() => router.push('/landing')}
        >
          버튼1 이동 버전
        </motion.button>
        <motion.button
          whileTap={{ scale: 1.05, opacity: 0.9 }}
          transition={{ duration: 0 }}
          className='button'
        >
          버튼2
        </motion.button>
        <motion.button
          whileTap={{ scale: 1.05, opacity: 0.9 }}
          transition={{ duration: 0 }}
          className='button'
          onClick={() => router.push('/landing')}
        >
          버튼2 이동 버전
        </motion.button>
      </div>
    </div>
  );
}

export default WellPage;
