'use client';

import { TextareaType } from '@/data/ui/textareaType';
import React, { useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';

export interface TextareaProps {
  /** 폰트 타입 - 기본/굵게 */
  type?: 'default' | 'bold';
  /** textarea 데이터 */
  option: TextareaType;
}

/** 리뷰, 메모 작성에 활용되는 동적 높이 조절 textarea
 * - 입력 값에 따라 높이가 조절됩니다.
 * - react hook form이 적용되어 있습니다.
 */
function Textarea({ type = 'default', option }: TextareaProps) {
  const {
    register,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext();
  const textValue = watch(String(option.fieldName));
  const { length } = textValue;
  const parentRef = useRef<HTMLDivElement>(null);

  /** 부모 div에 현재 입력 값을 clonedVal로 적용 */
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
          className={`textarea-common ${errors[String(option.fieldName)] ? 'input-error' : 'textarea-light'} ${type === 'bold' ? 'text-body-lg-bold' : 'text-body-lg'}`}
          maxLength={option.maxLength}
          placeholder={option.placeholder}
          rows={option.minRow}
          {...register(String(option.fieldName), {
            required: option.required,
            minLength: {
              value: option.minLength,
              message: option.errorMessage,
            },
            /** 에러가 있는 경우 onChange로 실시간 유효성 체크 */
            onChange: () => {
              if (errors[String(option.fieldName)]) {
                trigger(String(option.fieldName));
              }
            },
          })}
        />
      </div>

      <span className='px-page text-body-md text-error'>
        {errors[String(option.fieldName)]
          ? String(errors[String(option.fieldName)]!.message)
          : ''}
      </span>
    </div>
  );
}

export default Textarea;
