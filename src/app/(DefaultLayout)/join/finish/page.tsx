'use client';

import React from 'react';
import PopperAnimation from '@/components/animation/PopperAnimation';
import { usePreventBack } from '@/hooks/gesture/usePreventBack';
import { useSearchParams } from 'next/navigation';
import LinkButton from '@/components/common/button/LinkButton';
import FinishLight from '@/components/common/FinishLight';
import Image from 'next/image';
import { IMAGES } from '../../../../constants/images';
import BigTitle from '../../../../components/common/text/BigTitle';

function JoinFinishPage() {
  const username = useSearchParams().get('username');
  usePreventBack();

  return (
    <div
      className='flex h-full w-full flex-col justify-between overflow-hidden pt-[50%]'
      style={{
        backgroundImage: "url('/images/etc/finish-bg.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <BigTitle type='default' align='text-center'>
        야호!
        <br />
        가입이
        <br />
        완료되었어요
      </BigTitle>

      <div className='flex w-full flex-1 flex-col items-center justify-end gap-[12px] p-[24px]'>
        <div className='flex w-full flex-1 items-center justify-center'>
          <Image
            src={IMAGES.frog.congrats}
            alt='congrats'
            width={319}
            height={257}
          />
        </div>

        <div className='flex w-full flex-col gap-[12px]'>
          <span className=' gap-[12px] text-center text-body_lg_bold text-gray-800'>
            {username}님의
            <br />
            독서 성향을 알기 위해, 간단히 7가지만 물어볼게요!
          </span>
          <LinkButton route='/frolog-test'>내 독서성향 알아보기</LinkButton>
        </div>
      </div>
      <PopperAnimation />
    </div>
  );
}

export default JoinFinishPage;
