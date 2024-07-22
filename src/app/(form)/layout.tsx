import FormHeader from '@/components/Header/FormHeader';
import React from 'react';

function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-full flex-1 flex-col bg-gray-900 text-white'>
      <FormHeader />
      <div className='flex h-fit w-full flex-1 flex-col justify-between p-page'>
        {children}
      </div>
    </div>
  );
}

export default FormLayout;
