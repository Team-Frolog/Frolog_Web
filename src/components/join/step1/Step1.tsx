import ButtonWithText from '@/components/common/button/ButtonWithText';
import React from 'react';

function Step1() {
  return (
    <div className='p-page flex h-full flex-col justify-between'>
      <div>d</div>
      <ButtonWithText btnText='다음'>
        <p className='text-body_sm text-center text-gray-400'>
          개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며,
          <br />
          동의 거부시 서비스 이용이 제한됩니다.
        </p>
      </ButtonWithText>
    </div>
  );
}

export default Step1;
