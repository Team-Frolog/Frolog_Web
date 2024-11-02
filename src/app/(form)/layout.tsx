import FormHeader from '@/components/Header/FormHeader';
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='safe-bottom flex h-fit min-h-full w-full flex-col bg-gray-900 text-white'>
      <FormHeader />
      <MainLayout isCenter={false} extraClass='justify-between px-page'>
        {children}
      </MainLayout>
    </div>
  );
}

export default FormLayout;
