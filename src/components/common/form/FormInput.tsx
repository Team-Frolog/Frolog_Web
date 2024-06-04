import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { inputStyle } from '@/styles/input';

interface Props {
  type: 'text' | 'email' | 'password';
  placeholder: string;
  title?: string;
  fieldName: 'email' | 'password' | 'passwordCheck' | 'nickname';
  options: RegisterOptions;
}

function FormInput({ type, placeholder, title, fieldName, options }: Props) {
  const {
    register,
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
        placeholder={placeholder}
        style={{ imeMode: type === 'password' ? 'disabled' : 'auto' }}
        className={`rounded-[12px] border px-[16px] py-[18px] text-body_lg outline-none ${watch(fieldName) && errors[fieldName] ? inputStyle.error : inputStyle.default}`}
        onKeyDown={handleKeyPress}
        {...register(fieldName, options)}
      />
      <span className='text-body_md text-error'>
        {watch(fieldName) && errors[fieldName] && errors[fieldName]!.message}
      </span>
    </div>
  );
}

export default FormInput;
