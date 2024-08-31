import React from 'react';
import { motion } from 'framer-motion';
import { ErrorIcon } from 'public/icons';

interface Props {
  text: string;
}

function ToastMessage({ text }: Props) {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className='text-body-md fixed inset-x-0 top-2 z-80 mx-auto flex w-fit gap-[10px] rounded-[9px] bg-gray-700 px-[24px] py-[12px] text-white'
    >
      <ErrorIcon />
      <span>{text}</span>
    </motion.div>
  );
}

export default ToastMessage;
