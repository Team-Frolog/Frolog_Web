import React from 'react';
import LinkButton from '@/components/Button/LinkButton';

function StartButton() {
  return (
    <div className='fixed bottom-[24px] left-[50%] z-10 w-[390px] -translate-x-1/2 mobile:w-[90%]'>
      <LinkButton route='/' disabled={false}>
        Frolog 시작하기
      </LinkButton>
    </div>
  );
}

export default StartButton;
