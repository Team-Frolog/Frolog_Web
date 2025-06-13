'use client';

import React from 'react';
import Button from '@/components/Button/Button';
import ProfileForm from '@/components/Profile/ProfileForm';
import { useFormContext } from 'react-hook-form';

/** 회원가입 4단계: 정보 입력 폼 */
function Step4() {
  const { watch } = useFormContext();
  const job = watch('personal_infos.occupation.value');
  const gender = watch('personal_infos.gender.value');
  const birthDate = watch('personal_infos.birth_date.value');

  const isDisabled = Boolean(!gender || job === '선택' || !birthDate);
  return (
    <>
      <ProfileForm />
      <div className='flex flex-col justify-center gap-[16px]'>
        <p className='text-center text-body-lg-bold text-white'>
          맞춤 정보를 바탕으로
          <br />
          책과 친구를 추천할게요!
        </p>
        <Button type='submit' disabled={isDisabled}>
          가입완료!
        </Button>
      </div>
    </>
  );
}

export default Step4;
