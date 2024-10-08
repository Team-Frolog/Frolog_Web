'use client';

import TitleHeader from '@/components/Header/TitleHeader';
import ProfileForm from '@/components/Profile/ProfileForm';
import { Info } from '@/features/Join/types/form';
import { getToday } from '@/features/Join/utils/date';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ImageEditor from './ImageEditor';

interface EditForm {
  username: string;
  image: string | null;
  testType: string;
  intro: string;
  personal_infos: {
    occupation: Info;
    birth_date: Info;
    gender: Info;
  };
}

export const defaultValue: EditForm = {
  username: '',
  image: null,
  testType: '',
  intro: '',
  personal_infos: {
    occupation: {
      value: '무직',
      visibility: true,
    },
    birth_date: {
      value: getToday(),
      visibility: true,
    },
    gender: {
      value: '남성',
      visibility: true,
    },
  },
};

function ProfileEditForm() {
  const methods = useForm<EditForm>({
    mode: 'onBlur',
    defaultValues: defaultValue,
  });

  return (
    <FormProvider {...methods}>
      <TitleHeader title='' theme='light' type='edit' isDisabled={false} />
      <form className='flex w-full flex-1 flex-col items-center gap-[16px] overflow-auto py-[16px]'>
        <ImageEditor />
        <ProfileForm type='profile' theme='light' />
      </form>
    </FormProvider>
  );
}

export default ProfileEditForm;
