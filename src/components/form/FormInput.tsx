import React from 'react';

interface Props {
  type: 'text' | 'email' | 'password';
  placeholder: string;
  title?: string;
  errorMsg?: string;
}

const inputStyle = {
  default: 'border-gray-800 bg-gray-800 text-white placeholder:text-gray-600',
  error: 'border-error bg-error_bg text-white placeholder:text-white',
  pass: 'border-main bg-gray-800 text-white placeholder:text-gray-600',
};

function FormInput({ type, placeholder, title, errorMsg }: Props) {
  return (
    <div className='flex flex-col'>
      <h6 className='text-body_md text-white'>{title}</h6>
      <input
        type={type}
        placeholder={placeholder}
        className={`text-body_lg mb-[8px] mt-[12px] rounded-[12px] border px-[16px] py-[18px] outline-none ${inputStyle.error}`}
      />
      <span className='text-body_md text-error'>{errorMsg}</span>
    </div>
  );
}

export default FormInput;
