'use client';

import TitleHeader from '@/components/Header/TitleHeader';
import MainLayout from '@/layouts/MainLayout';
import ProfileForm from '@/components/Profile/ProfileForm';
import { getToday } from '@/features/Join/utils/date';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ImageEditor from './ImageEditor';
import { useProfileEdit } from '../../hooks/useProfileEdit';
import { ProfileEditFormType } from '../../types/editForm';

export const defaultValue: ProfileEditFormType = {
  username: '',
  image: null,
  reading_preference: null,
  self_intro: '',
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
  const methods = useForm<ProfileEditFormType>({
    mode: 'onBlur',
    defaultValues: defaultValue,
  });
  const { reset, getValues, handleSubmit } = methods;
  const { handleClickBack, handleEditProfile, original_username } =
    useProfileEdit(reset);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => handleEditProfile(data))}
        className='flex w-full flex-1 flex-col overflow-hidden bg-white'
      >
        <TitleHeader
          title=''
          theme='light'
          type='edit'
          isDisabled={false}
          onClickBack={() => handleClickBack(getValues())}
        />
        <MainLayout isCenter extraClass='pt-[16px] gap-[16px]'>
          <ImageEditor />
          <ProfileForm
            type='profile'
            theme='light'
            username={original_username}
          />
        </MainLayout>
      </form>
    </FormProvider>
  );
}

export default ProfileEditForm;
