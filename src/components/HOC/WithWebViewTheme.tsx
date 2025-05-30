'use client';

import React, { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
  bgColor: string;
}

function WithWebViewTheme({ children, bgColor }: Props) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: 'THEME', data: bgColor })
      );
    }
  }, []);

  return <>{children}</>;
}

export default WithWebViewTheme;
