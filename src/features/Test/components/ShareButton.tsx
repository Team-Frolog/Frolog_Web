'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTooltip } from '@/hooks/popup/useTooltip';
import { ShareIcon } from 'public/icons';
import { toast } from '@/modules/Toast';

function ShareButton() {
  const { isOpenTooltip } = useTooltip();

  const handleClickShare = async () => {
    try {
      await window.navigator.share({
        title: 'Frolog 독서 성향 테스트',
        url: process.env.NEXT_PUBLIC_TEST_SHARE_URL,
      });
    } catch (err: any) {
      if (!err.toString().includes('cancel')) {
        await window.navigator.clipboard.writeText(
          process.env.NEXT_PUBLIC_TEST_SHARE_URL!
        ).then(() =>  toast.normal('링크가 복사되었습니다!')).catch((err) => toast.error('다시 시도해주세요'))
      }
    }
  };

  return (
    <div className='relative z-20 w-fit'>
      <button type='button' onClick={handleClickShare}>
        <ShareIcon />
      </button>
      <AnimatePresence>
        {isOpenTooltip && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{
              y: [0, -5, 0],
              opacity: [1, 1, 1],
              transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 0.6,
                ease: 'linear',
              },
            }}
            transition={{
              duration: 0.3,
            }}
            exit={{ opacity: 0 }}
            className='share-tooltip w-[130px]'
          >
            테스트를 공유해보세요!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ShareButton;
