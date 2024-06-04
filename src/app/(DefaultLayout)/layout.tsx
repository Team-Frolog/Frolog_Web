import React from 'react';

function layout({ children }: { children: React.ReactNode }) {
  return <div className='h-fit min-h-dvh w-screen'>{children}</div>;
}

export default layout;
