'use client';

import { useNewReviewId } from '@/store/stackMotionStore';
import { useSession } from 'next-auth/react';
import React from 'react';
import { motion } from 'framer-motion';
import { chat } from '../../data/chat';
import { getRandomMessage } from '../../utils/getRandomMessage';

function GuideChat() {
  const { data: session } = useSession();
  const hasNewReview = useNewReviewId();

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className='tooltip-after relative mb-[20px] w-fit max-w-[90%] rounded-[20px] bg-white p-[20px] text-center text-body-lg text-gray-800 after:bottom-[-5px] after:border-[8px] after:border-white'
    >
      {session && hasNewReview && chat.first_review()}
      {session && !hasNewReview && getRandomMessage()}
      {!session && chat.not_loggedIn()}
    </motion.div>
  );
}

export default GuideChat;
