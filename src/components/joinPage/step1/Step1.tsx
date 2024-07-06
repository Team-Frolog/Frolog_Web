'use client';

import ButtonWithText from '@/components/common/button/ButtonWithText';
import React from 'react';
import { requiredConsentsKeys } from '@/data/joinForm';
import { useFormContext } from 'react-hook-form';
import { useStepActions } from '@/store/stepStore';
import TermsContainer from './TermsContainer';
import CheckAllItem from './CheckAllItem';

function Step1() {
  const { goNextJoinStep } = useStepActions();
  const { watch } = useFormContext();
  const isAgree = requiredConsentsKeys.every((key) => watch(key));

  return (
    <>
      <div className='flex w-full flex-col gap-[20px]'>
        <span className='text-body_md'>서비스 이용약관에 동의해주세요.</span>
        <CheckAllItem />
        <TermsContainer />
      </div>
      <ButtonWithText
        btnType='button'
        btnText='다음'
        disabled={!isAgree}
        onClick={goNextJoinStep}
      >
        <p className='text-center text-body_sm text-gray-400'>
          개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며,
          <br />
          동의 거부시 서비스 이용이 제한됩니다.
        </p>
      </ButtonWithText>
    </>
  );
}

export default Step1;
