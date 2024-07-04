'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

function GuideChat() {
  const { data: session } = useSession();
  return (
    <div className='relative mb-[20px] rounded-[20px] bg-gray-300 p-[20px] text-center text-body_lg text-gray-800 after:absolute after:bottom-[-5px] after:left-[50%] after:h-0 after:w-0 after:translate-x-[-50%] after:rotate-45 after:border-[8px] after:border-solid after:border-gray-300'>
      {session ? (
        <>
          높이높이 올라가고 싶어요!
          <br />
          책을 추가해 쌓아올려주세요
        </>
      ) : (
        <>
          로그인을 해야
          <br />
          책을 쌓을 수 있어요
        </>
      )}
    </div>
  );
}

export default GuideChat;
