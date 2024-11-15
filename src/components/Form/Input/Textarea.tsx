'use client';

import { TextareaType } from '@/data/ui/textareaType';
import React, { useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  type?: 'default' | 'bold';
  option: TextareaType;
}

function Textarea({ type = 'default', option }: Props) {
  const {
    register,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext();
  const textValue = watch(option.fieldName);
  const { length } = textValue;
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parentRef.current) {
      parentRef.current.dataset.clonedVal = textValue;
    }
  }, [textValue]);

  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <div className='flex justify-between px-page text-body-md text-gray-700'>
        <span>{option.title}</span>
        <span>
          {length}/{option.maxLength}
        </span>
      </div>

      <div
        ref={parentRef}
        className="grid after:invisible after:w-full after:whitespace-pre-wrap after:break-all after:border after:px-[24px] after:py-[28px] after:text-inherit after:content-[attr(data-cloned-val)_'_'] after:[grid-area:1/1/2/2] [&>textarea]:resize-none [&>textarea]:overflow-hidden [&>textarea]:[grid-area:1/1/2/2]"
      >
        <textarea
          className={`textarea-common ${errors[option.fieldName] ? 'input-error' : 'textarea-light'} ${type === 'bold' ? 'text-body-lg-bold' : 'text-body-lg'}`}
          maxLength={option.maxLength}
          placeholder={option.placeholder}
          rows={option.minRow}
          {...register(option.fieldName, {
            required: option.required,
            minLength: {
              value: option.minLength,
              message: option.errorMessage,
            },
            onChange: () => {
              if (errors[option.fieldName]) {
                trigger(option.fieldName);
              }
            },
          })}
        />
      </div>

      <span className='text-- px-page text-error'>
        {errors[option.fieldName]
          ? String(errors[option.fieldName]!.message)
          : ''}
      </span>
    </div>
  );
}

export default Textarea;
