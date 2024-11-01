'use client';

import React from 'react';
import TitleHeader from '@/components/Header/TitleHeader';
import MainLayout from '@/layouts/MainLayout';
import ProfileForm from '@/components/Profile/ProfileForm';
import { FormProvider, useForm } from 'react-hook-form';
import { getToday } from '@/utils/date';
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
      value: '학생',
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

interface Props {
  userId: string;
}

function ProfileEditForm({ userId }: Props) {
  const methods = useForm<ProfileEditFormType>({
    mode: 'onBlur',
    defaultValues: defaultValue,
  });
  const {
    reset,
    handleSubmit,
    watch,
    formState: { isDirty, isValid },
  } = methods;
  const { handleClickBack, handleEditProfile, original_username } =
    useProfileEdit(userId, reset, isDirty);
  const isDiabled = !watch('self_intro') || !watch('username') || !isValid;

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
          isDisabled={isDiabled}
          onClickBack={() => handleClickBack()}
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
