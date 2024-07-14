import { TextareaType } from '@/data/textareaType';
import React from 'react';

interface Props {
  option: TextareaType;
  content: string;
}

function ReadOnlyTextarea({ option, content }: Props) {
  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <span className='text-body_md text-gray-700'>{option.title}</span>
      <div className='textarea-common input-light'>{content}</div>
      <span className='self-end text-body_md text-gray-700'>
        {content.length}/{option.maxLength}
      </span>
    </div>
  );
}

export default ReadOnlyTextarea;
