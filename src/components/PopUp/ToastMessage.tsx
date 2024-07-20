import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { ICONS } from '@/constants/icons';

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
      className='fixed inset-x-0 top-2 z-40 mx-auto flex w-fit gap-[10px] rounded-[9px] bg-gray-700 px-[24px] py-[12px] text-body_md text-white'
    >
      <Image src={ICONS.common.form.error} alt='error' width={20} height={20} />
      <span>{text}</span>
    </motion.div>
  );
}

export default ToastMessage;
