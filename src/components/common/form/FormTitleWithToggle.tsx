import React from 'react';
import ToggleButton from './ToggleButton';
import { TInfoName } from '@/types/form';

interface Props {
  title: string;
  fieldName: TInfoName;
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
