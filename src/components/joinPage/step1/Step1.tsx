import ButtonWithText from '@/components/common/button/ButtonWithText';
import React from 'react';
import CheckAllItem from './CheckAllItem';
import TermsContainer from './TermsContainer';
import { PAGES } from '@/constants/pageConfig';
import { requiredConsentsKeys } from '@/data/joinForm';
import { useFormContext } from 'react-hook-form';

function Step1() {
  const { watch } = useFormContext();
  const isAgree = requiredConsentsKeys.every((key) => watch(key));

  return (
    <div className='flex h-full flex-col justify-between p-page'>
      <div className='flex w-full flex-col gap-[20px]'>
        <span className='text-body_md'>서비스 이용약관에 동의해주세요.</span>
        <CheckAllItem />
        <TermsContainer />
      </div>
      <ButtonWithText
        btnText='다음'
        disabled={!isAgree}
        route={`${PAGES.JOIN}?step=2`}
      >
        <p className='text-center text-body_sm text-gray-400'>
          개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며,
          <br />
          동의 거부시 서비스 이용이 제한됩니다.
        </p>
      </ButtonWithText>
    </div>
  );
}

export default Step1;
