import NavigationBar from '@/components/common/NavigationBar';
import React from 'react';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='default-h-w bg-white text-gray-800'>
      {children}
      <NavigationBar />
    </div>
  );
}

export default MainLayout;
