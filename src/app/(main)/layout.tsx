import NavigationBar from '@/components/NavigationBar/NavigationBar';
import React from 'react';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='safe-screen flex w-full flex-col items-center overflow-hidden'>
      {children}
      <NavigationBar />
    </div>
  );
}

export default MainLayout;
