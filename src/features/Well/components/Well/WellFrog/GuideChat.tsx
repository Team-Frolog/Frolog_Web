'use client';

import React, { useEffect, useState } from 'react';
import { useUserId } from '@/store/sessionStore';
import { motion } from 'framer-motion';
import { chat } from '../../../data/chat';
import { getRandomMessage } from '../../../utils/getRandomMessage';

interface Props {
  /** 말풍선 메세지 */
  message?: string;
  /** 말풍선 하단 margin */
  marginBottom: number;
}

/** 우물 내 개구리 말풍선 컴포넌트 */
function GuideChat({ message, marginBottom }: Props) {
  const userId = useUserId();
  const [isVisible, setIsVisible] = useState(true);
  const [msg, setMsg] = useState(message);

  useEffect(() => {
    // 로그인 한 경우
    if (userId) {
      if (!message) {
        setMsg(getRandomMessage());
      } else {
        setMsg(message);
      }
    }
    // 로그인 하지 않은 경우
    else {
      setMsg(chat.not_loggedIn);
    }
  }, [userId, message]);

  useEffect(() => {
    if (!message && userId) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.3 }}
      style={{ marginBottom }}
      className='tooltip-after relative mx-[24px] w-max whitespace-pre-wrap rounded-[20px] bg-white p-[20px] text-center text-body-lg text-gray-800 after:bottom-[-5px] after:border-[8px] after:border-white'
    >
      {msg}
    </motion.div>
  );
}

export default GuideChat;
