'use client';

import { chat } from '@/data/chat';
import { useNewReviewId } from '@/store/stackMotionStore';
import { useSession } from 'next-auth/react';
import React from 'react';
import { motion } from 'framer-motion';

function GuideChat() {
  const { data: session } = useSession();
  const hasNewReview = useNewReviewId();
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className='relative mb-[20px] rounded-[20px] bg-gray-300 p-[20px] text-center text-body_lg text-gray-800 after:absolute after:bottom-[-5px] after:left-[50%] after:h-0 after:w-0 after:translate-x-[-50%] after:rotate-45 after:border-[8px] after:border-solid after:border-gray-300'
    >
      {session && hasNewReview && chat.first_review()}
      {session && !hasNewReview && chat.loggedIn()}
      {!session && chat.not_loggedIn()}
    </motion.div>
  );
}

export default GuideChat;
