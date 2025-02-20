import React from 'react';
import { textareaType } from '@/data/ui/textareaType';
import NicknameInput from './NicknameInput';
import JobSelector from './JobSelector';
import GenderSelector from './GenderSelector';
import DateSelector from './DateSelector';
import FrologTestButton from './FrologTestButton';
import Textarea from '../Form/Input/Textarea';
import WithConditionalRendering from '../HOC/WithConditionalRendering';

interface Props {
  type?: 'join' | 'profile';
  theme?: 'dark' | 'light';
  username?: string;
}

/** 프로필 폼 컴포넌트
 * - 회원가입, 프로필 편집에서 활용됩니다.
 */
function ProfileForm({ type = 'join', theme = 'dark', username }: Props) {
  return (
    <div className='flex w-full flex-col gap-[36px]'>
      <WithConditionalRendering condition={type === 'join'}>
        <NicknameInput theme={theme} />
        <JobSelector theme={theme} />
        <GenderSelector theme={theme} />
        <DateSelector theme={theme} />
      </WithConditionalRendering>

      <WithConditionalRendering condition={type === 'profile'}>
        <div className='flex w-full flex-col gap-[36px] px-page'>
          <NicknameInput theme={theme} originUsername={username} />
          <FrologTestButton />
          <DateSelector theme={theme} />
          <GenderSelector theme={theme} />
          <JobSelector theme={theme} />
        </div>
        <Textarea type='default' option={textareaType.intro} />
      </WithConditionalRendering>
    </div>
  );
}

export default ProfileForm;
