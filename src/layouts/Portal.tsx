'use client';

import React from 'react';
import { createPortal } from 'react-dom';

/** 팝업, 토스트 등 absolute, fixed 형태의 컴포넌트 렌더링을 위한 portal */
function Portal({ children }: { children: React.ReactNode }) {
  const portal =
    typeof window !== 'undefined' && document.querySelector(`#portal`);

  return portal && children ? createPortal(children, portal) : null;
}

export default Portal;
