'use client';

import React, { ForwardedRef, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

type FieldName =
  | 'email'
  | 'password'
  | 'passwordCheck'
  | 'username'
  | 'title'
  | 'author'
  | 'name'
  | 'intro'
  | 'description'
  | 'reason';

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** input 이름 (react-hook-form 상에서의) */
  fieldName: FieldName;
  /** 에러 발생 시 메시지 (존재하는 경우에 렌더링) */
  errorMessage?: string;
  /** input 타이틀 */
  title?: string;
  /** 다크/라이트 테마 */
  theme?: 'dark' | 'light';
  /** 필수 표시 여부 (기본값 false) */
  isRequired?: boolean;
  /** input 길이 카운팅 표시 여부 (기본값 false) */
  hasCount?: boolean;
  /** 최대 길이 (hasCount=true인 경우 필요) */
  maxCount?: number;
}

/** 각종 폼에 활용되는 공통 input 컴포넌트
 * - react-hook-form이 적용되어 있습니다.
 *   - 적절한 fieldName을 전달해야 합니다.
 */
const FormInput = React.forwardRef(
  (
    {
      type = 'text',
      title,
      fieldName,
      errorMessage,
      maxCount,
      theme = 'dark',
      isRequired = false,
      hasCount = false,
      ...props
    }: FormInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { watch } = useFormContext();
    const inputValue = watch(fieldName) || '';

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.currentTarget.blur();
      }
    };

    const getInputMode = useCallback(
      () => (type === 'email' ? 'email' : 'text'),
      [type]
    );

    return (
      <div className='flex w-full flex-col gap-[8px]'>
        {title && (
          <div className='flex w-full justify-between'>
            <h6
              className={`mb-[4px] text-body-md ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
            >
              {title}{' '}
              {isRequired && <span className='text-body-md text-main'>*</span>}
            </h6>
            {hasCount && (
              <span
                className={`text-body-md text-gray-700 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
              >
                {inputValue.length}/{maxCount}
              </span>
            )}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          inputMode={getInputMode()}
          style={{ imeMode: type === 'password' ? 'disabled' : 'auto' }}
          className={`input-common placeholder:text-sm ${theme === 'dark' ? 'input-default' : 'input-light'} ${errorMessage && theme === 'dark' ? 'input-error' : ''} ${errorMessage && theme === 'light' ? 'input-light-error' : ''}`}
          onKeyDown={handleKeyPress}
          maxLength={maxCount}
          {...props}
        />
        <span className='text-body-md text-error'>{errorMessage}</span>
      </div>
    );
  }
);

export default FormInput;
