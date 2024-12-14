import React from 'react';
import { InfoName } from '@/features/Join';
import PublicToggle from '@/components/Profile/PublicToggle';

interface Props {
  /** 타이틀 */
  title: string;
  /** 공개/비공개 여부 대상 input의 필드명 */
  fieldName: InfoName;
  /** 다크/라이트 테마 */
  theme: 'dark' | 'light';
}

/** 공개/비공개 토클 버튼이 포함된 폼 타이틀 */
function FormTitleWithToggle({ title, fieldName, theme }: Props) {
  return (
    <div className='flex w-full justify-between'>
      <h6
        className={`mb-[4px] text-body-md ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
      >
        {title}
      </h6>
      <PublicToggle fieldName={fieldName} theme={theme} />
    </div>
  );
}

export default FormTitleWithToggle;
