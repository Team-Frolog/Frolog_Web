import NavigationBar from '@/components/common/NavigationBar';
import React from 'react';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-dvh w-screen bg-white text-gray-800'>
      {children}
      <NavigationBar />
    </div>
  );
}

export default MainLayout;
