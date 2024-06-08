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

const FormInput = React.forwardRef(
  (
    { type, placeholder, title, fieldName, errorMessage, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const {
      watch,
      formState: { errors },
    } = useFormContext();

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
          className={`input-common ${watch(fieldName) && errors[fieldName] ? 'input-error' : 'input-default'}`}
          onKeyDown={handleKeyPress}
          {...props}
        />
        <span className='text-body_md text-error'>{errorMessage}</span>
      </div>
    );
  }
);

export default FormInput;
