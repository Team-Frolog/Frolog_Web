import CheckButton from '@/components/Button/CheckButton';
import React from 'react';

interface Props {
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
  isSaved: boolean;
}

function RememberMe({ setIsSaved, isSaved }: Props) {
  return (
    <div
      className='flex items-center gap-[8px]'
      onClick={() => setIsSaved((prev) => !prev)}
    >
      <CheckButton isChecked={isSaved} />
      <span className='text-body-md cursor-default'>자동 로그인</span>
    </div>
  );
}

export default RememberMe;
