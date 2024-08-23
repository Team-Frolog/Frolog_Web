import NavigationBar from '@/components/NavigationBar';
import React from 'react';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-dvh w-full flex-col items-center overflow-hidden'>
      {children}
      <NavigationBar />
    </div>
  );
}

export default MainLayout;
