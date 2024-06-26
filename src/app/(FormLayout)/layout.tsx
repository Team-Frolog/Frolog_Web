import FormHeader from '@/components/common/header/FormHeader';
import React from 'react';

function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-screen flex-col'>
      <FormHeader />
      <div className='flex h-full w-full flex-1 flex-col justify-between p-page'>
        {children}
      </div>
    </div>
  );
}

export default FormLayout;
