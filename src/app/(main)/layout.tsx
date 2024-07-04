import NavigationBar from '@/components/common/NavigationBar';
import React from 'react';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-dvh w-screen flex-col bg-white text-gray-800'>
      <div className='h-fit min-h-full w-full flex-1 pb-[80px]'>{children}</div>
      <NavigationBar />
    </div>
  );
}

export default MainLayout;
