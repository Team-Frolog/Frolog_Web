import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface Props {
  type: 'text' | 'email' | 'password';
  placeholder: string;
  title?: string;
  errorMsg?: string;
  fieldName: 'email' | 'password' | 'passwordCheck';
  options: RegisterOptions;
}

const inputStyle = {
  default:
    'border-gray-800 bg-gray-800 text-white placeholder:text-gray-600 focus:border-main',
  error: 'border-error bg-error_bg text-white placeholder:text-white',
};

function FormInput({
  type,
  placeholder,
  title,
  errorMsg,
  fieldName,
  options,
}: Props) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='flex flex-col gap-[8px]'>
      {title && <h6 className='text-body_md mb-[4px] text-white'>{title}</h6>}
      <input
        type={type}
        placeholder={placeholder}
        className={`text-body_lg rounded-[12px] border px-[16px] py-[18px] outline-none ${watch(fieldName) && errors[fieldName] ? inputStyle.error : inputStyle.default}`}
        {...register(fieldName, options)}
      />
      <span className='text-body_md text-error'>
        {watch(fieldName) && errors[fieldName] && errors[fieldName]!.message}
      </span>
    </div>
  );
}

export default FormInput;
