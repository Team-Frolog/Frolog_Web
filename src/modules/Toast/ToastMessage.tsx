'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ToastErrorIcon, ToastNormalIcon } from 'public/icons';

interface Props {
  type: 'normal' | 'error';
  text: string;
}

function ToastMessage({ type, text }: Props) {
  const getIcon = () => {
    if (type === 'normal') return <ToastNormalIcon />;
    if (type === 'error') return <ToastErrorIcon />;
  };

  return (
    <motion.div
      id='toast-message'
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className='fixed inset-x-0 top-[12px] z-100 mx-auto flex w-fit gap-[10px] bg-gray-700 px-[24px] py-[12px] text-body-md text-white'
      style={{ borderRadius: '9px' }}
    >
      {getIcon()}
      <span>{text}</span>
    </motion.div>
  );
}

export default ToastMessage;
