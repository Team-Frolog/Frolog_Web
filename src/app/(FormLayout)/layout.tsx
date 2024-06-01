import FormHeader from '@/components/common/header/FormHeader';
import React from 'react';

function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-screen flex-col bg-gray-900 text-white'>
      <FormHeader />
      <div className='flex-1'>{children}</div>
    </div>
  );
}

export default FormLayout;
