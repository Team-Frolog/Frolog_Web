import React from 'react';
import { textareaType } from '@/data/ui/textareaType';
import NicknameInput from './NicknameInput';
import JobSelector from './JobSelector';
import GenderSelector from './GenderSelector';
import DateSelector from './DateSelector';
import FrologTestButton from './FrologTestButton';
import Textarea from '../Form/Input/Textarea';

interface Props {
  type?: 'join' | 'profile';
  theme?: 'dark' | 'light';
}

function ProfileForm({ type = 'join', theme = 'dark' }: Props) {
  return (
    <div className='flex w-full flex-col gap-[36px]'>
      {type === 'join' && (
        <>
          <NicknameInput theme={theme} />
          <JobSelector theme={theme} />
          <GenderSelector theme={theme} />
          <DateSelector theme={theme} />
        </>
      )}
      {type === 'profile' && (
        <>
          <div className='flex w-full flex-col gap-[36px] px-page'>
            <NicknameInput theme={theme} />
            <FrologTestButton />
            <DateSelector theme={theme} />
            <GenderSelector theme={theme} />
            <JobSelector theme={theme} />
          </div>
          <Textarea type='default' option={textareaType.intro} />
        </>
      )}
    </div>
  );
}

export default ProfileForm;
