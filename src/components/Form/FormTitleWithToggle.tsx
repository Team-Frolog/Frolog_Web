import React from 'react';
import { InfoName } from '@/features/Join';
import PublicToggle from '@/components/Profile/PublicToggle';

interface Props {
  title: string;
  fieldName: InfoName;
}

function FormTitleWithToggle({ title, fieldName }: Props) {
  return (
    <div className='flex w-full justify-between'>
      <h6 className='mb-[4px] text-body-md text-white'>{title}</h6>
      <PublicToggle fieldName={fieldName} />
    </div>
  );
}

export default FormTitleWithToggle;
