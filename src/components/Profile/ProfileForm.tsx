import React from 'react';
import NicknameInput from './NicknameInput';
import JobSelector from './JobSelector';
import GenderSelector from './GenderSelector';
import DateSelector from './DateSelector';

function ProfileForm() {
  return (
    <div className='flex w-full flex-col gap-[36px]'>
      <NicknameInput />
      <JobSelector />
      <GenderSelector />
      <DateSelector />
    </div>
  );
}

export default ProfileForm;
