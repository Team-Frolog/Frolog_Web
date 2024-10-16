'use client';

import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { chat } from '../../data/chat';
import { getRandomMessage } from '../../utils/getRandomMessage';

interface Props {
  isRootUser: boolean;
}

function GuideChat({ isRootUser }: Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState('');
  const { data: session } = useSession();
  console.log(isRootUser);

  useEffect(() => {
    if (session) {
      setMessage(getRandomMessage());
    } else {
      setMessage(chat.not_loggedIn);
    }
  }, [session]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.3 }}
      className='tooltip-after relative mx-[24px] mb-[20px] w-max whitespace-pre-wrap rounded-[20px] bg-white p-[20px] text-center text-body-lg text-gray-800 after:bottom-[-5px] after:border-[8px] after:border-white'
    >
      {message}
    </motion.div>
  );
}

export default GuideChat;
