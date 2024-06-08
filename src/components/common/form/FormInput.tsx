import React, { ForwardedRef } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { inputStyle } from '@/styles/input';

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
        event.currentTarget.blur(); // 입력란 포커스를 잃음
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
          className={`rounded-[12px] border px-[16px] py-[18px] text-body_lg outline-none ${watch(fieldName) && errors[fieldName] ? inputStyle.error : inputStyle.default}`}
          onKeyDown={handleKeyPress}
          {...props}
        />
        <span className='text-body_md text-error'>{errorMessage}</span>
      </div>
    );
  }
);

export default FormInput;
