import { TextareaType } from '@/data/textareaType';
import React from 'react';

interface Props {
  option: TextareaType;
}

function Textarea({ option }: Props) {
  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <span className='text-body_md text-gray-700'>{option.title}</span>
      <div
        className="grid
        after:invisible after:w-full after:whitespace-pre-wrap after:break-all after:border after:px-[16px] after:py-[18px] after:text-inherit after:content-[attr(data-cloned-val)_'_'] after:[grid-area:1/1/2/2]
        [&>textarea]:resize-none [&>textarea]:overflow-hidden [&>textarea]:[grid-area:1/1/2/2]"
      >
        <textarea
          className='textarea-default'
          maxLength={option.maxLength}
          placeholder={option.placeholder}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            const parentNode = target.parentNode as HTMLElement;
            parentNode.dataset.clonedVal = target.value;
          }}
          rows={option.minRow}
        />
      </div>

      <div className='flex justify-between'>
        <span className='text-body_md text-error'>{option.errorMessage}</span>
        <span className='text-body_md text-gray-700'>4/{option.maxLength}</span>
      </div>
    </div>
  );
}

export default Textarea;
