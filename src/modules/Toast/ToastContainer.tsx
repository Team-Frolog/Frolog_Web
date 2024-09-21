import React from 'react';
import { AnimatePresence } from 'framer-motion';
import ToastMessage from './ToastMessage';
import { ToastProps } from '.';

interface Props {
  toast: ToastProps | null;
}

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
