import FormHeader from '@/components/Header/FormHeader';
import React from 'react';

function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FormHeader />
      <div className='flex h-fit w-full flex-1 flex-col justify-between p-page'>
        {children}
      </div>
    </>
  );
}

export default FormLayout;
