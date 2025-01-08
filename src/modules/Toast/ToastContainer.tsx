import React from 'react';
import { AnimatePresence } from 'framer-motion';
import ToastMessage from './ToastMessage';
import { ToastProps } from '.';

interface Props {
  toast: ToastProps | null;
}

/** 토스트를 렌더링하기 위한 wrapping 컨테이너 */
function ToastContainer({ toast }: Props) {
  return (
    <div id='toast-container'>
      <AnimatePresence>
        {toast && <ToastMessage type={toast.type} text={toast.text} />}
      </AnimatePresence>
    </div>
  );
}

export default ToastContainer;
