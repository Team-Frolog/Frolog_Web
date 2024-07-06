'use client';

import React, { ForwardedRef } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'password';
  placeholder: string;
  fieldName: 'email' | 'password' | 'passwordCheck' | 'username';
  errorMessage?: string;
  title?: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const FormInput = React.forwardRef(
  (
    { type, placeholder, title, fieldName, errorMessage, ...props }: Props,
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
        {title && <h6 className='mb-[4px] text-body_md text-white'>{title}</h6>}
        <input
          type={type}
          ref={ref}
          placeholder={placeholder}
          style={{ imeMode: type === 'password' ? 'disabled' : 'auto' }}
          className={`input-common placeholder:text-sm ${watch(fieldName) && errorMessage ? 'input-error' : 'input-default'}`}
          onKeyDown={handleKeyPress}
          {...props}
        />
        <span className='text-body_md text-error'>{errorMessage}</span>
      </div>
    );
  }
);

export default FormInput;
