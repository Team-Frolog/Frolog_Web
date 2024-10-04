'use client';

import React from 'react';
import LinkButton from '@/components/Button/LinkButton';
import { TEST_CALLBACK } from '@/constants/storage';
import Button from '@/components/Button/Button';
import { useRouter } from 'next/navigation';

function StartButton() {
  const router = useRouter();
  const callback = sessionStorage.getItem(TEST_CALLBACK);

  return (
    <div className='fixed bottom-[24px] left-[50%] z-10 w-[390px] -translate-x-1/2 mobile:w-[90%]'>
      {callback ? (
        <Button
          type='button'
          onClick={() => {
            sessionStorage.removeItem(TEST_CALLBACK);
            router.replace(callback);
          }}
        >
          프로필 편집 이어하기
        </Button>
      ) : (
        <LinkButton route='/' disabled={false}>
          Frolog 시작하기
        </LinkButton>
      )}
    </div>
  );
}

export default StartButton;
