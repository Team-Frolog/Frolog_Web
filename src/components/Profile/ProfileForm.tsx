import React from 'react';
import NicknameInput from './NicknameInput';
import JobSelector from './JobSelector';
import GenderSelector from './GenderSelector';
import DateSelector from './DateSelector';

interface Props {
  theme?: 'dark' | 'light';
}

function ProfileForm({ theme = 'dark' }: Props) {
  return (
    <div className='flex w-full flex-col gap-[36px]'>
      <NicknameInput theme={theme} />
      <JobSelector theme={theme} />
      <GenderSelector theme={theme} />
      <DateSelector theme={theme} />
    </div>
  );
}

export default ProfileForm;
