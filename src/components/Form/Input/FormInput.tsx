'use client';

import React, { ForwardedRef } from 'react';
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
  | 'description';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'password';
  fieldName: FieldName;
  errorMessage?: string;
  title?: string;
  theme?: 'dark' | 'light';
  isRequired?: boolean;
  hasCount?: boolean;
  maxCount?: number;
}

const FormInput = React.forwardRef(
  (
    {
      type,
      placeholder,
      title,
      fieldName,
      errorMessage,
      maxCount,
      theme = 'dark',
      isRequired = false,
      hasCount = false,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { watch } = useFormContext();

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.currentTarget.blur();
      }
    };

    return (
      <div className='flex w-full flex-col gap-[8px]'>
        {title && (
          <div className='flex w-full justify-between'>
            <h6
              className={`mb-[4px] text-body-md ${theme === 'dark' ? ' text-white' : 'text-gray-700'}`}
            >
              {title}{' '}
              {isRequired && <span className='text-body-md text-main'>*</span>}
            </h6>
            {hasCount && (
              <span className='text-body-md text-gray-700'>
                {watch(fieldName).length}/{maxCount}
              </span>
            )}
          </div>
        )}
        <input
          type={type}
          ref={ref}
          inputMode={type === 'email' ? 'email' : 'text'}
          placeholder={placeholder}
          style={{ imeMode: type === 'password' ? 'disabled' : 'auto' }}
          className={`input-common placeholder:text-sm ${watch(fieldName) && errorMessage ? 'input-error' : theme === 'dark' ? 'input-default' : 'input-light'}`}
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
