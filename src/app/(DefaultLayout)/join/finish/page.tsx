
import BigTitle from '@/components/common/text/BigTitle';
import React from 'react';
import JoinFinishLight from '@/components/joinPage/JoinFinishLight';

function JoinFinishPage() {
  return (
    <div className='mobile:h-screen flex h-fit w-full flex-col justify-between overflow-hidden'>
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
