'use client';

import { CirclePlus } from 'public/icons';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  /** 클릭 핸들러 */
  onClick: () => void;
}

/** 검색되지 않는 책인 경우, 책 등록을 요청할 수 있는 버튼 */
function NoBookButton({ onClick }: Props) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsTooltipOpen(true);
      setTimeout(() => {
        setIsTooltipOpen(false);
      }, 3000);
    }, 2000);
  }, []);

  return (
    <button
      type='button'
      onClick={onClick}
      className='fixed bottom-[24px] z-50 mobile:right-[24px]'
    >
      <CirclePlus />
      <AnimatePresence>
        {isTooltipOpen && (
          <motion.div
            className='tooltip-no-book'
            initial={{ y: -10, opacity: 0 }}
            animate={{
              y: [0, 5, 0],
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
          >
            찾는 책이
            <br />
            없나요?
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default NoBookButton;
