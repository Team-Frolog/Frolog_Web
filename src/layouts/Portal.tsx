'use client';

import React from 'react';
import { createPortal } from 'react-dom';

function Portal({ children }: { children: React.ReactNode }) {
  const portal =
    typeof window !== 'undefined' && document.querySelector(`#portal`);

  return portal && children ? createPortal(children, portal) : null;
}

export default Portal;
