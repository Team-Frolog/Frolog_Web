import { TextareaType } from '@/data/textareaType';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  option: TextareaType;
}

function Textarea({ option }: Props) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const { length } = watch(option.fieldName);

  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <span className='text-body_md text-gray-700'>{option.title}</span>
      <div
        className="grid
        after:invisible after:w-full after:whitespace-pre-wrap after:break-all after:border after:px-[16px] after:py-[18px] after:text-inherit after:content-[attr(data-cloned-val)_'_'] after:[grid-area:1/1/2/2]
        [&>textarea]:resize-none [&>textarea]:overflow-hidden [&>textarea]:[grid-area:1/1/2/2]"
      >
        <textarea
          className={`textarea-common ${errors[option.fieldName] ? 'input-error' : 'input-light'}`}
          maxLength={option.maxLength}
          placeholder={option.placeholder}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            const parentNode = target.parentNode as HTMLElement;
            parentNode.dataset.clonedVal = target.value;
          }}
          rows={option.minRow}
          {...register(option.fieldName, {
            minLength: {
              value: option.minLength,
              message: option.errorMessage,
            },
          })}
        />
      </div>

      <div className='flex justify-between'>
        <span className='text-body_md text-error'>
          {errors[option.fieldName]
            ? String(errors[option.fieldName]!.message)
            : ''}
        </span>
        <span className='text-body_md text-gray-700'>
          {length}/{option.maxLength}
        </span>
      </div>
    </div>
  );
}

export default Textarea;
