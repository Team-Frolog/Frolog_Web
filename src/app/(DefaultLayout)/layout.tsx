/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';

function layout({ children }: { children: React.ReactNode }) {
  return <div className='min-h-dvh w-screen'>{children}</div>;
}

export default layout;
