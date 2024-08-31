import { TextareaType } from '@/data/ui/textareaType';
import React from 'react';
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
  const { length } = watch(option.fieldName);

  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <div className='flex justify-between px-page text-body_md text-gray-700'>
        <span>{option.title}</span>
        <span>
          {length}/{option.maxLength}
        </span>
      </div>

      <div
        className="grid
        after:invisible after:w-full after:whitespace-pre-wrap after:break-all after:border after:px-[16px] after:py-[18px] after:text-inherit after:content-[attr(data-cloned-val)_'_'] after:[grid-area:1/1/2/2]
        [&>textarea]:resize-none [&>textarea]:overflow-hidden [&>textarea]:[grid-area:1/1/2/2]"
      >
        <textarea
          className={`textarea-common ${errors[option.fieldName] ? 'input-error' : 'textarea-light'} ${type === 'bold' ? 'text-body_lg_bold' : 'text-body_lg'}`}
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
            onChange: () => {
              if (errors[option.fieldName]) {
                trigger(option.fieldName);
              }
            },
          })}
        />
      </div>

      <span className='px-page text-body_md text-error'>
        {errors[option.fieldName]
          ? String(errors[option.fieldName]!.message)
          : ''}
      </span>
    </div>
  );
}

export default Textarea;
