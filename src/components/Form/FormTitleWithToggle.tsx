import React from 'react';
import { InfoName } from '@/features/Join';
import PublicToggle from '@/components/Profile/PublicToggle';

interface Props {
  title: string;
  fieldName: InfoName;
  theme: 'dark' | 'light';
}

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
