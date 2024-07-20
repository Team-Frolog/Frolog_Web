import React from 'react';
import { InfoName } from '@/features/Join';
import ToggleButton from './Button/ToggleButton';

interface Props {
  title: string;
  fieldName: InfoName;
}

function FormTitleWithToggle({ title, fieldName }: Props) {
  return (
    <div className='flex w-full justify-between'>
      <h6 className='mb-[4px] text-body_md text-white'>{title}</h6>
      <ToggleButton fieldName={fieldName} />
    </div>
  );
}

export default FormTitleWithToggle;
