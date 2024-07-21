import FormHeader from '@/components/Header/FormHeader';
import React from 'react';

function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex-1 bg-gray-900 w-full flex flex-col text-white'>
      <FormHeader />
      <div className='flex h-fit w-full flex-1 flex-col justify-between p-page'>
        {children}
      </div>
    </div>
  );
}

export default FormLayout;
