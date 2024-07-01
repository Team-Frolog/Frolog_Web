'use client';

import Image from 'next/image';
import React, { useCallback } from 'react';
import { ICONS } from '@/constants/icons';
import { ERROR_ALERT } from '@/constants/message';
import { AnimatePresence, motion } from 'framer-motion';
import { useTooltip } from '@/hooks/popup/useTooltip';

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
      <button type='button' onClick={isDownloaded ? undefined : onClickImgLink}>
        <Image
          src={isDownloaded ? ICONS.test.download_done : ICONS.test.download}
          alt='download'
          width={30}
          height={30}
        />
      </button>
      <AnimatePresence>
        {isOpenTooltip && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='absolute bottom-[-50px] right-[-7px] w-[130px] rounded-[12px] bg-gray-300 p-[12px] text-center text-body_sm text-gray-800 after:absolute after:right-[15px] after:top-[-5px] after:h-0 after:w-0 after:rotate-45 after:border-[8px] after:border-solid after:border-gray-300'
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
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='absolute bottom-[-50px] right-[-7px] w-[80px] rounded-[12px] bg-gray-300 p-[12px] text-center text-body_sm text-gray-800 after:absolute after:right-[15px] after:top-[-5px] after:h-0 after:w-0 after:rotate-45 after:border-[8px] after:border-solid after:border-gray-300'
          >
            저장완료!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DownloadButton;
