import { TextareaType } from '@/data/textareaType';
import React from 'react';

interface Props {
  option: TextareaType;
}

function Textarea({ option }: Props) {
  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <span className='text-body_md text-gray-700'>{option.title}</span>
      <textarea
        className='textarea-default h-fit min-h-[40px]'
        maxLength={option.maxLength}
        placeholder={option.placeholder}
        rows={option.minRow}
      />
      <div className='flex justify-between'>
        <span className='text-body_md text-error'>{option.errorMessage}</span>
        <span className='text-body_md text-gray-700'>4/{option.maxLength}</span>
      </div>
    </div>
  );
}

export default Textarea;
