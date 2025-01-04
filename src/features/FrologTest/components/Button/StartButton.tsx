'use client';

import React from 'react';
import LinkButton from '@/components/Button/LinkButton';
import Button from '@/components/Button/Button';
import { useRouter, useSearchParams } from 'next/navigation';
import { PAGES } from '@/constants/page';

/** 테스트 결과 페이지의 하단 버튼 */
function StartButton() {
  const router = useRouter();
  const callback = useSearchParams().get('callbackUrl');

  return (
    <div
      id='start-button'
      className='fixed left-[50%] z-10 w-[390px] -translate-x-1/2 mobile:w-[90%]'
    >
      {callback ? (
        <Button
          type='button'
          onClick={() => {
            router.replace(callback);
            router.back();
          }}
        >
          프로필 편집 이어하기
        </Button>
      ) : (
        <LinkButton route={PAGES.HOME} disabled={false}>
          Frolog 시작하기
        </LinkButton>
      )}
    </div>
  );
}

export default StartButton;
