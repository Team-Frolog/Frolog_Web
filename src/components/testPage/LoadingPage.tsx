import React, { useEffect, useState } from 'react';
import FinishLight from '../common/FinishLight';
import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import { PAGES } from '@/constants/page';
import { useSearchParams } from 'next/navigation';

function LoadingPage() {
  const type = useSearchParams().get('type');
  const [isDone, setIsDone] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDone(true);

      setTimeout(() => {
        window.location.replace(`${PAGES.TEST_RESULT}/${type}`);
      }, 1500);
    }, 2000);
  }, []);

  return (
    <div className='flex h-full w-full flex-col items-center pt-[30px]'>
      <FinishLight>
        {isDone ? '분석 완료!' : '분석 중'}
        <br />
        <span className='text-title_xl_bold text-gray-900'>
          {isDone ? '당신의 독서 성향은...' : '조금만 기다려 주세요!'}
        </span>
      </FinishLight>
      <Image
        src={
          isDone ? IMAGES.frog.evaluation.done : IMAGES.frog.evaluation.loading
        }
        alt='loading'
        width={300}
        height={300}
        className='w-full bg-white'
      />
    </div>
  );
}

export default LoadingPage;
