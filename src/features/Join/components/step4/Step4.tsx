'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import Button from '@/components/Button/Button';
import ProfileForm from '@/components/Profile/ProfileForm';

function Step4() {
  const {
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <ProfileForm />
      <Button
        type='submit'
        disabled={!watch('username') || Boolean(errors.username)}
      >
        가입완료
      </Button>
    </>
  );
}

export default Step4;
