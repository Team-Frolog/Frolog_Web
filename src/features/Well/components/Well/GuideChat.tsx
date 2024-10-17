'use client';

import { useNewReviewId } from '@/store/stackMotionStore';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { chat } from '../../data/chat';
import { getRandomMessage } from '../../utils/getRandomMessage';

function GuideChat() {
  const [visible, setVisible] = useState(true);
  const { data: session } = useSession();
  const hasNewReview = useNewReviewId();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.3 }}
          className='tooltip-after relative mx-[24px] mb-[20px] w-max whitespace-pre-wrap rounded-[20px] bg-white p-[20px] text-center text-body-lg text-gray-800 after:bottom-[-5px] after:border-[8px] after:border-white'
        >
          {session && hasNewReview && chat.first_review()}
          {session && !hasNewReview && getRandomMessage()}
          {!session && chat.not_loggedIn()}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default GuideChat;