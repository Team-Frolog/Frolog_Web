import NavigationBar from '@/components/NavigationBar/NavigationBar';
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
