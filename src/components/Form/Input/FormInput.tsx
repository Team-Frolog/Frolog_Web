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
  | 'wellName';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'password';
  fieldName: FieldName;
  errorMessage?: string;
  title?: string;
  theme?: 'dark' | 'light';
  isRequired?: boolean;
}

const FormInput = React.forwardRef(
  (
    {
      type,
      placeholder,
      title,
      fieldName,
      errorMessage,
      theme = 'dark',
      isRequired = false,
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
      <div className='flex flex-col gap-[8px]'>
        {title && (
          <h6
            className={`mb-[4px] text-body_md ${theme === 'dark' ? ' text-white' : 'text-gray-700'}`}
          >
            {title}{' '}
            {isRequired && <span className='text-body_md text-main'>*</span>}
          </h6>
        )}
        <input
          type={type}
          ref={ref}
          inputMode={type === 'email' ? 'email' : 'text'}
          placeholder={placeholder}
          style={{ imeMode: type === 'password' ? 'disabled' : 'auto' }}
          className={`input-common placeholder:text-sm ${watch(fieldName) && errorMessage ? 'input-error' : theme === 'dark' ? 'input-default' : 'input-light'}`}
          onKeyDown={handleKeyPress}
          {...props}
        />
        <span className='text-body_md text-error'>{errorMessage}</span>
      </div>
    );
  }
);

export default FormInput;
