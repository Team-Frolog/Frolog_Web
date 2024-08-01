'use client';

import React, { useCallback } from 'react';
import { ERROR_ALERT } from '@/constants/message';
import { AnimatePresence, motion } from 'framer-motion';
import { useTooltip } from '@/hooks/popup/useTooltip';
import { DownloadDoneIcon, DownloadIcon } from 'public/icons';

interface Props {
  type: '1' | '2' | '3';
}

function DownloadButton({ type }: Props) {
  const { isOpenTooltip, isOpenDone, isDownloaded, setIsDownloaded } =
    useTooltip();

  const onClickImgLink = useCallback(() => {
    const srcUrl = `/images/test/result-image/type${type}.png`;
    fetch(srcUrl, { method: 'GET' })
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Frolog 독서 성향 테스트 결과`;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(url);
        }, 1000);
        a.remove();
        setIsDownloaded(true);
      })
      .catch(() => {
        window.alert(ERROR_ALERT);
      });
  }, [type]);

  return (
    <div className='relative z-20 w-fit'>
      <button
        type='button'
        onClick={isDownloaded ? undefined : onClickImgLink}
        className={`${isDownloaded && 'cursor-default'}`}
      >
        {isDownloaded ? <DownloadDoneIcon /> : <DownloadIcon />}
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
            className='tooltip w-[130px]'
          >
            결과를 저장해보세요!
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpenDone && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='tooltip w-[80px]'
          >
            저장완료!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DownloadButton;
