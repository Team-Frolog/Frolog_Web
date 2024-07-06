import NavigationBar from '@/components/common/NavigationBar';
import React from 'react';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <NavigationBar />
    </>
  );
}

export default MainLayout;
