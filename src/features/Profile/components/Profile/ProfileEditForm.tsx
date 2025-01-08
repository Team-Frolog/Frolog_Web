'use client';

import React from 'react';
import TitleHeader from '@/components/Header/TitleHeader';
import MainLayout from '@/layouts/MainLayout';
import ProfileForm from '@/components/Profile/ProfileForm';
import { FormProvider, useForm } from 'react-hook-form';
import ImageEditor from './ImageEditor';
import { useProfileEdit } from '../../hooks/useProfileEdit';
import { ProfileEditFormType } from '../../types/editForm';
import { profileEditDefaultValue } from '../../data/editForm';

interface Props {
  userId: string;
}

/** 프로필 수정 폼 */
function ProfileEditForm({ userId }: Props) {
  const methods = useForm<ProfileEditFormType>({
    mode: 'onBlur',
    defaultValues: profileEditDefaultValue,
  });
  const {
    reset,
    handleSubmit,
    formState: { isDirty },
  } = methods;
  const { handleClickBack, handleEditProfile, original_username } =
    useProfileEdit(userId, reset, isDirty);

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
