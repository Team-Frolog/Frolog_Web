import NavigationBar from '@/components/common/NavigationBar';
import React from 'react';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-dvh w-screen bg-white text-gray-800'>
      <div className='h-fit min-h-full w-full pb-[80px]'>{children}</div>
      <NavigationBar />
    </div>
  );
}

export default MainLayout;
