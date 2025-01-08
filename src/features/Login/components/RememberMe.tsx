import CheckButton from '@/components/Button/CheckButton';
import React from 'react';

interface Props {
  /** 자동 로그인 여부 setter */
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
  /** 자동 로그인 여부 */
  isSaved: boolean;
}

/** 자동 로그인 버튼 */
function RememberMe({ setIsSaved, isSaved }: Props) {
  return (
    <div
      className='flex items-center gap-[8px]'
      onClick={() => setIsSaved((prev) => !prev)}
    >
      <CheckButton isChecked={isSaved} />
      <span className='cursor-default text-body-md'>자동 로그인</span>
    </div>
  );
}

export default RememberMe;
