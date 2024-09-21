'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ToastErrorIcon } from 'public/icons';

interface Props {
  errorMsg: string;
}

function ErrorPopUp({ errorMsg }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      style={{
        display: 'flex',
        gap: '10px',
        width: 'fit-content',
        borderRadius: '9px',
        border: '1px solid rgb(255 100 100)',
        backgroundColor: 'rgb(14 14 14)',
        padding: '12px 24px',
      }}
      transition={{ duration: 0.2 }}
    >
      <ToastErrorIcon />
      <span className='text-body-md text-white'>{errorMsg}</span>
    </motion.div>
  );
}

export default ErrorPopUp;
