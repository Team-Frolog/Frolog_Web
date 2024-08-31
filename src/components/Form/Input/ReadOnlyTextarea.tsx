import { TextareaType } from '@/data/ui/textareaType';
import React from 'react';

interface Props {
  option: TextareaType;
  content: string;
  type?: 'defualt' | 'bold';
}

function ReadOnlyTextarea({ option, content, type }: Props) {
  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <div className='text-body-md flex justify-between px-page text-gray-700'>
        <span>{option.title}</span>
        <span>
          {content.length}/{option.maxLength}
        </span>
      </div>
      <div
        className={`textarea-common input-light break-words ${type === 'bold' ? 'text-body-lg-bold' : 'text-body-lg'}`}
      >
        {content}
      </div>
    </div>
  );
}

export default ReadOnlyTextarea;
